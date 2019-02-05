import {
  SETUP_AUTHORS,
  SET_PAGE,
  SET_SEARCH_QUERY,
  SORT_AUTHORS,
} from './constants';

const initialState = {
  data: {
    raw: [],
    filtered: [],
    chunked: [],
  },
  currentPage: 0,
  search: '',
  sortBy: 'pageviews',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETUP_AUTHORS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload.query,
        data: {
          ...state.data,
          filtered: action.payload.data.filtered,
          chunked: action.payload.data.chunked,
        },
        sortBy: 'pageviews',
      };

    case SORT_AUTHORS:
      return {
        ...state,
        data: {
          ...state.data,
          chunked: action.payload.data,
        },
        sortBy: action.payload.sortBy,
      };

    default: return state;
  }
};
