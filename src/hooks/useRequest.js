import { useReducer } from 'react';

import useMountEffect from './useMountEffect';

const initialState = {
  data: {},
  loading: true,
  error: undefined,
};

const reducer = (state, { type, payload }) => {
  const data = payload?.data ?? {};

  switch (type) {
    case 'FETCH_START': {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }

    case 'REFETCH_START': {
      return {
        ...state,
        error: undefined,
      };
    }

    case 'FETCH_SUCCESS': {
      return {
        ...state,
        data,
        error: undefined,
        loading: false,
      };
    }

    case 'FETCH_ERROR': {
      return {
        ...state,
        error: payload?.error,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default function (cb, options) {
  const { onError = () => {} } = options ?? {};
  const [reducerData, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = reducerData;

  const getData = async (isRefetch = false) => {
    try {
      dispatch({ type: isRefetch ? 'REFETCH_START' : 'FETCH_START' });
      const data = await cb();
      dispatch({ type: 'FETCH_SUCCESS', payload: { data } });
    } catch (e) {
      dispatch({ type: 'FETCH_ERROR', payload: { error: e } });
      onError(e);
    }
  };

  useMountEffect(() => {
    (async () => {
      await getData();
    })();
  });

  const refetch = async () => getData(true);

  return { data, loading, error, refetch };
}
