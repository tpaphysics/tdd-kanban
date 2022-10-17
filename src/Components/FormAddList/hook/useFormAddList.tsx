import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef, useCallback } from 'react';
import { useColumn } from '../../../Hooks/useColumn';

export default function useFormAddList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [bgList, setBgList] = useState('BLACK');
  const [tag, setTag] = useState('');
  const { column, addList } = useColumn();

  const handleAddList = useCallback(() => {
    addList({ title, bgList, tag });
    onClose();
  }, [addList, bgList, tag, title]);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return {
    column,
    isOpen,
    onOpen,
    onClose,
    title,
    setTitle,
    bgList,
    setBgList,
    tag,
    setTag,
    initialRef,
    finalRef,
    handleAddList,
  };
}
