export type Task = {
  id: number;
  date: string;
  tasks: Tasks[];
};

export type Tasks = {
  id: number;
  title: string;
  description: string;
  priority: "medium" | "hight" | "low";
  isCompleted: boolean;
};
