import React, { useCallback, useRef, useState } from 'react';
import { ICard } from '../../../data/interfaces/ICard';
import { useColumn } from '../../../Hooks/useColumn';
import { useKanban } from '../../../Hooks/useKanban';

import { useList } from '../../../Hooks/useList';
import { formatTask } from './utils/utils';

export const useEditableCard = (initialCard: ICard) => {
  const { column } = useColumn();
  const { list, removeCard } = useList();
  const { handleUpdateTask, handleUpdateFinished } = useKanban();

  const [finished, setFinished] = useState(initialCard.finished);
  const [preTask, setPreTask] = useState(initialCard.task);
  const [task, setTask] = useState(initialCard.task);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
    handleUpdateFinished(column, list, initialCard.id, !finished);
  }, [column, finished, handleUpdateFinished, initialCard.id, list]);

  const handleEditTask = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPreTask(event.target.value);
  }, []);

  const handleClickCheck = useCallback(() => {
    const format = formatTask(preTask);
    if (format == '') {
      setTask('Edit task');
      setPreTask('Edit task');
      handleUpdateTask(column, list, initialCard.id, 'EditTask');
    } else {
      setTask(format);
      setPreTask(format);
      handleUpdateTask(column, list, initialCard.id, format);
    }
  }, [column, handleUpdateTask, initialCard.id, list, preTask]);

  const handleClickCloseEdit = useCallback(() => {
    setPreTask(task);
  }, [task]);

  const handleRemoveCard = useCallback(() => {
    removeCard(initialCard.id);
  }, [initialCard.id, removeCard]);

  return {
    column,
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
