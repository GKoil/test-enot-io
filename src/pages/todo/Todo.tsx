import { useContext, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography, Box, IconButton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ModalSetting from "./components/ModalSetting";
import styles from "./Todo.module.scss";

import context from "../../context/Context";
import TASKS from "../../constants/tasks";

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

  return (
    <div className={styles.todo__title}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">To Do</Typography>
        <IconButton onClick={toggleModal}>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </Box>

      {status === "loading" && <span>spinner</span>}

      <ul>
        {value?.data?.tasks.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.description}
          </li>
        ))}
      </ul>

      {isOpen && <ModalSetting isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
}

export default Todo;
