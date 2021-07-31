import {call, put, select, take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast} from '../apiCalls';

export const getUserFromState = (state: any) => state.user;

/**
 *
 */
export function* loadDashboardNonSequencedNonBlocking(): any {
  try {
    yield take('FETCH_USER_SUCCESS');

    const user = yield select(getUserFromState);

    const departure = yield call(loadDeparture, user);

    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {departure}});

    yield put({type: 'FETCH_DEPARTURE3_SUCCESS', departure});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error});
  }
}

/**
 *
 */
export function* isolatedFlight(): any {
  try {
    /* departure will take the value of the object passed by the put*/
    const departure = yield take('FETCH_DEPARTURE3_SUCCESS');

    // Flight can be called unsequenced /* BUT NON BLOCKING VS FORECAST*/
    const flight = yield call(loadFlight, departure.flightID);

    // Tell the store we are ready to be displayed
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {flight}});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error});
  }
}

/**
 *
 */
export function* isolatedForecast(): any {
  try {
    /* departure will take the value of the object passed by the put*/
    const departure = yield take('FETCH_DEPARTURE3_SUCCESS');

    const forecast = yield call(loadForecast, departure.date);
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: {forecast}});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error});
  }
}
