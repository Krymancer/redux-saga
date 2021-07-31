const dashboard = (state = {}, action: any) => {
  switch (action.type) {
    case 'FETCH_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const dashboard2 = (state = {}, action: any) => {
  switch (action.type) {
    case 'FETCH_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const dashboard3 = (state = {}, action: any) => {
  switch (action.type) {
    case 'FETCH_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export {dashboard, dashboard2, dashboard3};
