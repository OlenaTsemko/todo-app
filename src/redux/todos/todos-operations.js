import axios from 'axios';

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
  getByQueryRequest,
  getByQuerySuccess,
  getByQueryError,
} from './todos-actions';

export const addTodo = todo => async dispatch => {
  dispatch(addTodoRequest());

  try {
    // const {
    //   data: { data },
    // } = await axios.post('/task', todo);
    const {
      data: { data },
    } = await axios.post('/tasks', todo);

    dispatch(addTodoSuccess(data.task));
    return data.task;
  } catch (error) {
    dispatch(addTodoError(error.message));
  }
};

export const deleteTodo = todoId => async dispatch => {
  dispatch(deleteTodoRequest());

  try {
    // await axios.delete(`/task/${todoId}`);
    await axios.delete(`/tasks/${todoId}`);

    dispatch(deleteTodoSuccess(todoId));
  } catch (error) {
    dispatch(deleteTodoError(error.message));
  }
};

export const updateTodo = (id, updatedTodo) => async dispatch => {
  dispatch(updateTodoRequest());

  try {
    // const {
    //   data: { data },
    // } = await axios.put(`/task/${id}`, updatedTodo);
    const {
      data: { data },
    } = await axios.put(`/tasks/${id}`, updatedTodo);
    // console.log(data);
    dispatch(updateTodoSuccess(data.task));
    return data.task;
  } catch (error) {
    dispatch(updateTodoError(error.message));
  }
};

export const getTodosByPage = (limit, offset, sort) => async dispatch => {
  dispatch(getByPageRequest());

  try {
    // const {
    //   data: { data },
    // } = await axios.get(`/task?limit=${limit}&skip=${skip}`);
    const {
      data: {
        data: { tasks },
      },
    } = await axios.get(
      `/tasks?limit=${limit}&offset=${offset}&${sort}=description`,
    );
    dispatch(getByPageSuccess(tasks));
    return tasks;
  } catch (error) {
    dispatch(getByPageError(error.message));
  }
};

export const getTodosByQuery = query => async dispatch => {
  dispatch(getByQueryRequest());

  try {
    const {
      data: {
        data: { tasks },
      },
    } = await axios.get(`/tasks/query=${query}`);
    dispatch(getByQuerySuccess(tasks));
    return tasks;
  } catch (error) {
    dispatch(getByQueryError(error.message));
  }
};

export const getTodosByDate = date => async dispatch => {
  dispatch(getByQueryRequest());

  try {
    const {
      data: {
        data: { tasks },
      },
    } = await axios.get(`/tasks/date=${date}`);
    dispatch(getByQuerySuccess(tasks));
    return tasks;
  } catch (error) {
    dispatch(getByQueryError(error.message));
  }
};

// todo поміняти екшини на гетБайСтатус і прописати для них редюсери
export const getTodosByStatus =
  (limit, offset, status, sort) => async dispatch => {
    dispatch(getByPageRequest());

    try {
      const {
        data: {
          data: { tasks },
        },
      } = await axios.get(
        `/tasks?limit=${limit}&offset=${offset}&isDone=${status}&${sort}=description`,
      );
      dispatch(getByPageSuccess(tasks));
      return tasks;
    } catch (error) {
      dispatch(getByPageError(error.message));
    }
  };

export const getAllTodos = () => async dispatch => {
  dispatch(getAllTodosRequest());

  try {
    const {
      data: {
        data: { tasks },
      },
    } = await axios.get(`/tasks/all`);
    dispatch(getAllTodosSuccess(tasks));
    return tasks;
  } catch (error) {
    dispatch(getAllTodosError(error.message));
  }
};
