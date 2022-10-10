import { useCallback, useState } from 'react';

export const useEditableCard = () => {
  const [finished, setFinished] = useState(false);

  const handleClickTag = useCallback(() => {
    setFinished(!finished);
  }, [finished]);

  return { finished, handleClickTag };
};
