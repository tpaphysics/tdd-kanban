function formatTask(task: string) {
  const max = 25;
  const size = task.length;
  if (size > max) return `${task.substring(0, max - 3)}...`;
  else return task;
}

export { formatTask };
