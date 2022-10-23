import { Task } from "@/types/task.type";

const PRIORITY = ["low", "medium", "hight"] as const;
const TITLE = "Goceries For Dinner";
const DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

const today = new Date();
let day = today.getDate() - 1;
const month = today.getMonth() + 1;

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const TASKS: Task[] = Array.from(Array(10).keys()).map((item) => {
  if (item % 3 === 0) {
    day += 1;
  }

  return {
    id: item,
    date: `${month}.${day}.${today.getFullYear()}`,
    title: TITLE,
    description: DESCRIPTION,
    priority: PRIORITY[getRandomNumber(3)],
    isCompleted: getRandomNumber(2) === 0,
  };
});

export default TASKS;
