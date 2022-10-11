import React, { useState, useCallback } from 'react';

export const useFormAddCard = () => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleToogle = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  }, []);

  return { show, setShow, newTask, setNewTask, handleToogle, handleChange };
};
