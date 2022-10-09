import { Typography, Box } from "@mui/material";
import classNames from "classnames";
import { useContext } from "react";
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

  const handleToggleTask = (id: number) => {
    console.log(id, "id handle");
    value?.actions.toggleTask(id);
  };

  return (
    <section>
      {data}
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
                    [styles.dayTasks__itemTitle_completed]: task.isCompleted,
                  })}
                  variant="h5"
                >
                  {task.title}
                </Typography>
                <Typography variant="subtitle2">{task.description}</Typography>
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
  );
}

export default DayTasks;
