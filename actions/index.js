import uniqid from 'uniqid';
import { ADD_USER, DELETE_USER, SEARCH_INPUT } from './constants';

export const addUser = userName => ({
  type: ADD_USER,
  id: uniqid(),
  userName,
});

export const deleteUser = id => ({
  type: DELETE_USER,
  id,
});

export const search = searchString => ({
  type: SEARCH_INPUT,
  searchString,
});
