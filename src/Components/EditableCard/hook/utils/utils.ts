function formatTask(task: string) {
  const max = 25;
  const size = task.length;
  size > max ? `${task.substring(0, max - 3)}...` : task;
}

export { formatTask };
