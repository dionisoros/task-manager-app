import { generatePath } from 'react-router-dom';
import RouterUrl from './RouterUrl';

const Routes = {
  homePage: (): string => generatePath(RouterUrl.Home),
  taskPage: (): string => generatePath(RouterUrl.Tasks),
  taskEditPage: (id: string): string =>
    generatePath(RouterUrl.TaskEdit, { id }),
};

export default Routes;
