import React from 'react';
import { useColumn } from '../../Hooks/useColumn';
import KanbanList from '../KanbanList';

function KanbanListsContainer() {
  const { column } = useColumn();
  return (
    <>
      {column.lists.map((list) => (
        <KanbanList list={list} key={list.id} />
      ))}
    </>
  );
}

export default KanbanListsContainer;
