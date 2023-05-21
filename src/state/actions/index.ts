import { ActionType } from '../action-types';

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesActionSuccess
  | SearchRepositoriesActionError;

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesActionError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
