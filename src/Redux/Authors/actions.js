import _ from 'lodash';
import dataBase from '../../utils/dataBaseMock';
import {
  SETUP_AUTHORS,
  SET_PAGE,
  SET_SEARCH_QUERY,
  SORT_AUTHORS,
} from './constants';

export const setupAuthors = () => (dispatch) => {
  const indexedData = dataBase
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    .map((e, index) => {
      e.id = index + 1;
      return e;
    });

  indexedData[0].medal = 'gold';
  indexedData[1].medal = 'silver';
  indexedData[2].medal = 'bronze';

  const chunkedData = _.chunk(indexedData, 10);
  dispatch({
    type: SETUP_AUTHORS,
    payload: {
      raw: indexedData,
      chunked: chunkedData,
    },
  });
};

export const setPage = page => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: parseInt(page, 10),
  });
};

export const setSearchQuery = query => (dispatch, getState) => {
  const authors = getState().authors.data.raw;
  const filtersAuthors = authors.filter(e => e.name.toLowerCase().includes(query.toLowerCase()));
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: {
      data: {
        chunked: _.chunk(filtersAuthors, 10),
        filtered: filtersAuthors,
      },
      query,
    },
  });
};

export const sortAuthors = sortBy => (dispatch, getState) => {
  const filteredAuthors = getState().authors.data.filtered;
  const sortedAuthors = filteredAuthors.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return sortBy === 'pageviews' ? -1 : 1;
    if (a[sortBy] < b[sortBy]) return sortBy === 'pageviews' ? 1 : -1;
    return 0;
  });

  dispatch({
    type: SORT_AUTHORS,
    payload: {
      data: _.chunk(sortedAuthors, 10),
      sortBy,
    },
  });
};
