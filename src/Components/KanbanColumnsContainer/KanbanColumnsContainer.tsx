import React from 'react';
import columns from '../../data/columns';
import KanbanColumn from '../KanbanColumn';

function KanbanColumnsContainer() {
  return (
    <>
      {columns.map((column) => (
        <KanbanColumn initialColumn={column} key={column.id} />
      ))}
    </>
  );
}

export default KanbanColumnsContainer;
