import { createContext } from 'react';
import { IAppContext } from './interface';

export const AppContext = createContext<IAppContext>({} as IAppContext);
