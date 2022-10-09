import { Typography, Box } from "@mui/material";
import classNames from "classnames";
import { Tasks } from "@/types/task.type";
import Toggler from "../../../../ui-kit/Toggler";
import styles from "./DayTasks.module.scss";

type DayTasksType = {
  data: string;
  tasks: Tasks[];
};

function DayTasks({ data, tasks }: DayTasksType) {
  const handleChangePriority = () => {
    // Process change
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
                <button
                  onClick={handleChangePriority}
                  className={classNames(styles.dayTasks__itemPriority, {
                    [styles.dayTasks__itemPriority_hight]:
                      task.priority === "hight",
                    [styles.dayTasks__itemPriority_medium]:
                      task.priority === "medium",
                    [styles.dayTasks__itemPriority_low]:
                      task.priority === "low",
                  })}
                  type="button"
                >
                  <span className="visually-hidden">Изменить статус</span>
                </button>
              </div>
              <div>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>
            </Box>
            <Toggler />
          </Box>
        ))}
      </div>
    </section>
  );
}

export default DayTasks;
