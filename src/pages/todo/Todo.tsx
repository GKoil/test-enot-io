import { useContext, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography, Box, IconButton, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ModalSetting from "./components/ModalSetting";
import styles from "./Todo.module.scss";

import context from "../../context/Context";
import TASKS from "../../constants/tasks";
import DayTasks from "./components/DayTasks";
import { Task } from "@/types/task.type";

function Todo() {
  const value = useContext(context);
  const [isOpen, setIsOpen] = useState(false);

  const { status } = useQuery(["tasks"], () => {
    value?.actions.addTasks(TASKS);
    return () => {};
  });

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const transformTasks = (tasks?: Task[]) => {
    if (!tasks) return {};

    return tasks.reduce((acc, item): { [key: string]: Task[] } => {
      if (acc[item.date]) {
        return { ...acc, [item.date]: [...acc[item.date], item] };
      }
      return { ...acc, [item.date]: [item] };
    }, {} as { [key: string]: Task[] });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">To Do</Typography>
        <IconButton className={styles.todo__setting} onClick={toggleModal}>
          <SettingsIcon style={{ color: "#F4F4F4" }} fontSize="large" />
        </IconButton>
      </Box>

      {status === "loading" && <CircularProgress />}

      {status === "success" && (
        <ul className={styles.todo__tasks}>
          {Object.entries(transformTasks(value?.data?.tasks)).map(
            ([dateTask, itemTasks]) => {
              return (
                <li key={dateTask}>
                  <DayTasks data={dateTask} tasks={itemTasks} />
                </li>
              );
            },
          )}
        </ul>
      )}

      {value && value.data && value?.data.news.isShow && (
        <div className={styles.todo__newsWrapper}>
          <p className={styles.todo__news}>{value?.data?.news.title}</p>
        </div>
      )}

      {isOpen && <ModalSetting isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
}

export default Todo;
