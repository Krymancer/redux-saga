const user = (state = {}, action: any) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return action.payload;
    default: {
      return state;
    }
  }
};

export default user;
