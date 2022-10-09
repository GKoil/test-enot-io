const processData = (data: Date, todayData: Date): string => {
  if (
    data.getDay() === todayData.getDate() &&
    data.getMonth() === todayData.getMonth() &&
    data.getFullYear() === todayData.getFullYear()
  ) {
    return "Today";
  }

  if (
    data.getMonth() === todayData.getMonth() &&
    data.getFullYear() === todayData.getFullYear()
  ) {
    return "Tomorrow";
  }

  return `${data.getDate()}/${data.getMonth()}`;
};

export default processData;
