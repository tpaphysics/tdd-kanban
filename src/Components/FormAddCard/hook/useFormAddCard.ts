import React, { useState, useCallback } from 'react';
import { useList } from '../../../Hooks/useList';

export const useFormAddCard = () => {
  const { addCard } = useList();
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleToogle = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  }, []);

  const handleClick = useCallback(() => {
    addCard(newTask);
    setNewTask('');
    setShow(false);
  }, [addCard, newTask]);

  return { show, setShow, newTask, setNewTask, handleToogle, handleChange, handleClick };
};
