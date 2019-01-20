import getData from './util/getData';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KANJIS_PENDING,
  REQUEST_KANJIS_SUCCESS,
  REQUEST_KANJIS_FAILED,
} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestKanjis = () => dispatch => {
  dispatch({
    type: REQUEST_KANJIS_PENDING,
  });
  getData('GET_ALL').subscribe(
    data => dispatch({ type: REQUEST_KANJIS_SUCCESS, payload: data }),
    err => dispatch({ type: REQUEST_KANJIS_FAILED, payload: err })
  );
};
