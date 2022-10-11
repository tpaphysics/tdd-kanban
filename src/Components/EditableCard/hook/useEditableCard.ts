import React, { useCallback, useRef, useState } from 'react';
import { formatTask } from './utils/utils';

export const useEditableCard = () => {
  const [finished, setFinished] = useState(false);
  const [task, setTask] = useState('Task');
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
  }, [finished]);

  const handleEditTask = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }, []);

  const handleOnBlur = useCallback(() => {
    const format = formatTask(task);
    setTask(format);
  }, [task]);

  return { task, inputRef, finished, handleClickTag, handleEditTask, handleOnBlur };
};
