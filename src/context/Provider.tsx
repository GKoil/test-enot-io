import { useState } from "react";
import { Data } from "@/types/data.type";

import Context from "./Context";
import { Task } from "@/types/task.type";

type ProviderType = {
  children: React.ReactNode;
};

function Provider({ children }: ProviderType) {
  const [data, setData] = useState<Data | null>(null);

  const actions = {
    toggleTask: (id: number) => {
      const selectedTaskIndex = data?.tasks.findIndex((task) => task.id === id);
      if (selectedTaskIndex === undefined || !data?.tasks) return;
      const selectedTask = data?.tasks[selectedTaskIndex];

      const newTasks = [...data.tasks];
      newTasks.splice(selectedTaskIndex, 1, {
        ...selectedTask,
        isCompleted: !selectedTask.isCompleted,
      });
      setData((prev) => {
        if (!prev) return null;

        return { ...prev, tasks: newTasks };
      });
    },
    setNews: (title: string) => {
      setData((prev) => {
        if (!prev) return null;

        return { ...prev, news: { ...prev?.news, title } };
      });
    },
    toggleNews: () => {
      setData((prev) => {
        if (!prev) return null;

        return { ...prev, news: { ...prev?.news, isShow: !prev.news.isShow } };
      });
    },
    addTasks: (tasks: Task[]) => {
      setData((prev) => ({
        tasks,
        news: prev ? prev.news : { isShow: false },
      }));
    },
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ data, actions }}>{children}</Context.Provider>
  );
}

export default Provider;
