import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KANJIS_PENDING,
  REQUEST_KANJIS_SUCCESS,
  REQUEST_KANJIS_FAILED,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchKanjis = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateKanjis = {
  isPending: false,
  kanjis: [],
  error: '',
};

export const requestKanjis = (state = initialStateKanjis, action = {}) => {
  switch (action.type) {
    case REQUEST_KANJIS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_KANJIS_SUCCESS:
      return { ...state, kanjis: action.payload, isPending: false };
    case REQUEST_KANJIS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
