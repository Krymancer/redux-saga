import {call, put, select, take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast} from '../apiCalls';

export const getUserFromState = (state: any) => state.user;

/**
 *
 */
export function* loadDashboardNonSequenced(): any {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(getUserFromState);

    const departure = yield call(loadDeparture, user);

    // Flight and Forecast can be called non-sequenced /* BUT BLOCKING */
    const [flight, forecast] = yield [
      call(loadFlight, departure.flightID),
      call(loadForecast, departure.date),
    ];

    yield put({
      type: 'FETCH_DASHBOARD2_SUCCESS',
      payload: {departure, flight, forecast},
    });
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error.message});
  }
}
