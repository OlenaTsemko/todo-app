import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
  getByPageRequest,
  getByPageSuccess,
  getByPageError,
  getAllTodosRequest,
  getAllTodosSuccess,
  getAllTodosError,
  changeFilter,
} from './todos-actions';
import { logoutSuccess } from 'redux/auth/auth-actions';

const items = createReducer([], {
  [getByPageSuccess]: (_, { payload }) => payload.tasks,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [updateTodoSuccess]: (state, { payload }) =>
    state.map(item => (item._id === payload._id ? payload : item)),

  [logoutSuccess]: () => [],
});

const allItems = createReducer([], {
  [getAllTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
  [updateTodoSuccess]: (state, { payload }) =>
    state.map(item => (item._id === payload._id ? payload : item)),

  [logoutSuccess]: () => [],
});

const itemsByPageLength = createReducer(null, {
  [getByPageSuccess]: (_, { payload }) => payload.total,
  [addTodoSuccess]: (state, { payload }) => state + 1,
  [deleteTodoSuccess]: (state, { payload }) => state - 1,
});

// todo добавити фільтр по тудушкам

const filter = createReducer([], {
  [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [addTodoError]: setError,
  [addTodoRequest]: () => null,
  [deleteTodoError]: setError,
  [deleteTodoRequest]: () => null,
  [updateTodoError]: setError,
  [updateTodoRequest]: () => null,
  [getByPageError]: setError,
  [getByPageRequest]: () => null,
  [getAllTodosError]: setError,
  [getAllTodosRequest]: () => null,
});

export default combineReducers({
  items,
  allItems,
  itemsByPageLength,
  filter,
  error,
});
