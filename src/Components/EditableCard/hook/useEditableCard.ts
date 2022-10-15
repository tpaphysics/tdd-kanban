import React, { useCallback, useRef, useState } from 'react';
import { ICard } from '../../../data/interfaces/ICard';
import { useList } from '../../../Hooks/useList';
import { formatTask } from './utils/utils';

export const useEditableCard = (initialCard: ICard) => {
  const { list, removeCard } = useList();

  const [finished, setFinished] = useState(initialCard.finished);
  const [task, setTask] = useState(initialCard.task);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
  }, [finished]);

  const handleEditTask = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }, []);

  const handleClickCheck = useCallback(() => {
    const format = formatTask(task);
    format == '' ? setTask('Edit task') : setTask(format);
  }, [task]);

  const handleRemoveCard = useCallback(() => {
    removeCard(initialCard.id);
  }, [initialCard.id, removeCard]);

  return {
    list,
    task,
    setTask,
    inputRef,
    finished,
    handleClickTag,
    handleEditTask,
    handleClickCheck,
    handleRemoveCard,
  };
};
