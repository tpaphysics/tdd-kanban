import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { RiFileList3Line } from 'react-icons/ri';
import { useColumn } from '../../Hooks/useColumn';
import EmptyLists from '../EmptyLists/EmprtyLists';
import KanbanList from '../KanbanList';

function KanbanListsContainer() {
  const { column } = useColumn();
  return (
    <>
      {column.lists.length == 0 ? (
        <EmptyLists />
      ) : (
        column.lists.map((list) => <KanbanList list={list} key={list.id} />)
      )}
    </>
  );
}

export default KanbanListsContainer;
