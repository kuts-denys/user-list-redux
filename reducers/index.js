import { ADD_USER, DELETE_USER, SEARCH_INPUT } from '../actions/constants';

const initialState = {
  users: [],
  searchString: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { id: action.id, userName: action.userName }],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    case SEARCH_INPUT:
      return {
        ...state,
        searchString: action.searchString,
      };
    default:
      return state;
  }
};

export default reducer;
