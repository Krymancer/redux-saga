import {call, put, select, take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast} from '../apiCalls';

export const getUserFromSate = (state: any) => state.user;

/**
 *
 */
export function* loadDashboardSequenced(): any {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(getUserFromSate);

    const departure = yield call(loadDeparture, user);

    const flight = yield call(loadFlight, user);

    const forecast = yield call(loadForecast, user);

    yield put({
      type: 'FETCH_DASHBOARD_SUCCESS',
      payload: {forecast, flight, departure},
    });
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error});
  }
}
