import React, { useCallback, useRef, useState } from 'react';
import { ICard } from '../../../data/interfaces/ICard';

import { useList } from '../../../Hooks/useList';
import { formatTask } from './utils/utils';

export const useEditableCard = (initialCard: ICard) => {
  const { list, removeCard } = useList();

  const [finished, setFinished] = useState(initialCard.finished);
  const [preTask, setPreTask] = useState(initialCard.task);
  const [task, setTask] = useState(initialCard.task);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
  }, [finished]);

  const handleEditTask = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPreTask(event.target.value);
  }, []);

  const handleClickCheck = useCallback(() => {
    const format = formatTask(preTask);
    if (format == '') {
      setTask('Edit task');
      setPreTask('Edit task');
    } else {
      setTask(format);
      setPreTask(format);
    }
  }, [preTask, task]);

  const handleClickCloseEdit = useCallback(() => {
    setPreTask(task);
  }, [task]);

  const handleRemoveCard = useCallback(() => {
    removeCard(initialCard.id);
  }, [initialCard.id, removeCard]);

  return {
    list,
    preTask,
    task,
    setPreTask,
    setTask,
    inputRef,
    finished,
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleRemoveCard,
    handleClickCloseEdit,
  };
};
