import {call, put} from '@redux-saga/core/effects';
import {loadUser as getUser} from '../apiCalls';
/**
 *
 */
export function* loadUser(): any {
  try {
    const user = yield call(getUser);
    yield put({type: 'FETCH_USER_SUCCESS', payload: user});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', payload: error});
  }
}
