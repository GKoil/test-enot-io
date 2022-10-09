export type Task = {
  id: number;
  date: string;
  title: string;
  description: string;
  priority: "medium" | "hight" | "low";
  isCompleted: boolean;
};
