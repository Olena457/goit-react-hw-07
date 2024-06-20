import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/selectors.js';
export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectFilteredContacts = state => state.filters.status;
