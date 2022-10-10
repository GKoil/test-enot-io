import { Typography, Box, IconButton } from "@mui/material";
import classNames from "classnames";
import { useContext, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Task } from "@/types/task.type";
import Toggler from "../../../../ui-kit/Toggler";
import styles from "./DayTasks.module.scss";
import context from "../../../../context/Context";

type DayTasksType = {
  data: string;
  tasks: Task[];
};

function DayTasks({ data, tasks }: DayTasksType) {
  const value = useContext(context);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleTask = (id: number) => {
    // process request
    value?.actions.toggleTask(id);
  };

  const handleToggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {isOpen ? (
        <section>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            gap={1}
            marginBottom={2}
            marginLeft={2}
          >
            <CheckBoxIcon />
            <Typography variant="h6">{`${data} Tasks`}</Typography>
            <Box marginLeft="auto" marginRight={2}>
              <IconButton onClick={handleToggleList}>
                <span className="visually-hidden">Скрыть список </span>
                <ArrowCircleUpIcon className={styles.dayTasks__toggleIcon} />
              </IconButton>
            </Box>
          </Box>
          <div className={styles.dayTasks__item}>
            {tasks.map((task) => (
              <Box
                key={task.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={1}>
                  <div className={styles.dayTasks__itemPriorityWrapper}>
                    <div
                      className={classNames(styles.dayTasks__itemPriority, {
                        [styles.dayTasks__itemPriority_hight]:
                          task.priority === "hight",
                        [styles.dayTasks__itemPriority_medium]:
                          task.priority === "medium",
                        [styles.dayTasks__itemPriority_low]:
                          task.priority === "low",
                      })}
                    >
                      <span className="visually-hidden">Изменить статус</span>
                    </div>
                  </div>
                  <div>
                    <Typography
                      className={classNames(styles.dayTasks__itemTitle, {
                        [styles.dayTasks__itemTitle_completed]:
                          task.isCompleted,
                      })}
                      variant="h5"
                    >
                      {task.title}
                    </Typography>
                    <Typography variant="subtitle2">
                      {task.description}
                    </Typography>
                  </div>
                </Box>
                <Toggler
                  checked={task.isCompleted}
                  onChange={() => handleToggleTask(task.id)}
                />
              </Box>
            ))}
          </div>
        </section>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          className={styles.dayTasks__item}
        >
          <Typography variant="h6">{`${data} Tasks`}</Typography>
          <IconButton onClick={handleToggleList}>
            <span className="visually-hidden">Раскрыть список </span>
            <ArrowDropDownCircleRoundedIcon
              className={styles.dayTasks__toggleIcon}
            />
          </IconButton>
        </Box>
      )}
    </div>
  );
}

export default DayTasks;
