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
      const selectedTask = data?.tasks.find((task) => task.id === id);
      if (!selectedTask || !data) return;
      setData(data);
    },
    toggleNews: () => {},
    addTasks: (tasks: Task[]) => {
      console.log(tasks);
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
