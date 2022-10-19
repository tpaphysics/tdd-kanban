import { useContext } from 'react';
import { AppContext } from './Context';

export const useApp = () => {
  return useContext(AppContext);
};
