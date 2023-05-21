import { combineReducers } from 'redux';
import repositoriesRducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesRducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
