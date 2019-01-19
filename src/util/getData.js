import { from } from 'rxjs';
import httpObservable from 'simplehttpobservable';
import kanjis from '../data/mocks/kanjis.json';
import endpoints from '../data/endpoints.json';

const mocks = {
  GET_ALL: kanjis,
};

const getEndpoint = endpointName => {
  return endpoints.api[endpointName];
};

const getMock = mockName => {
  return mocks[mockName];
};

const getData = name => {
  if (process.env.REACT_APP_MOCK) {
    return from([getMock(name)]);
  } else {
    return httpObservable(getEndpoint(name));
  }
};

export default getData;
