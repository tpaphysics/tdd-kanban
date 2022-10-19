import React from 'react';
import { useKanban } from '../../Hooks/useKanban';
import KanbanColumn from '../KanbanColumn';

function KanbanColumnsContainer() {
  const { columns } = useKanban();

  return (
    <>
      {columns.map((column) => (
        <KanbanColumn initialColumn={column} key={column.id} />
      ))}
    </>
  );
}

export default KanbanColumnsContainer;
