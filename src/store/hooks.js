const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

export const withLoading = (fn) => async (...args) => {
  const [ctx] = args;
  const { commit, state } = ctx;
  if (state.loading !== false) return null;

  commit(SET_LOADING, true);
  const result = await fn(...args);
  commit(SET_LOADING, false);
  return result;
};

export const withErrorHandling = (fn) => async (...args) => {
  const [{ commit }] = args;
  try {
    return await fn(...args);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    commit(SET_ERROR, err.response?.data.msg);
    return null;
  }
};
