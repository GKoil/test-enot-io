import { Typography, Box } from "@mui/material";
import { useContext, memo } from "react";
import classNames from "classnames";
import Toggler from "../../../../ui-kit/Toggler";
import context from "../../../../context/Context";
import styles from "./DayTask.module.scss";
import { Task } from "@/types/task.type";

type DayTasksType = Task;

function DayTask({
  id,
  title,
  description,
  priority,
  isCompleted,
}: DayTasksType) {
  const value = useContext(context);

  const handleToggleTask = () => {
    // process request
    value?.actions.toggleTask(id);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" gap={1}>
        <button
          aria-label="Change status"
          type="button"
          className={classNames(styles.dayTask__priority, {
            [styles.dayTask__priority_hight]: priority === "hight",
            [styles.dayTask__priority_medium]: priority === "medium",
            [styles.dayTask__priority_low]: priority === "low",
          })}
        />
        <div>
          <Typography
            className={classNames(styles.dayTask__title, {
              [styles.dayTask__title_completed]: isCompleted,
            })}
            variant="h5"
            title={title}
          >
            {title}
          </Typography>
          <Typography
            className={styles.dayTask__description}
            variant="subtitle2"
            title={description}
          >
            {description}
          </Typography>
        </div>
      </Box>
      <Toggler checked={isCompleted} onChange={handleToggleTask} />
    </Box>
  );
}

export default memo(DayTask);
