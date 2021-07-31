import {takeLatest} from '@redux-saga/core/effects';
import {all, fork} from 'redux-saga/effects';

import {loadUser} from './user';
import {
  loadDashboardSequenced,
  loadDashboardNonSequenced,
  loadDashboardNonSequencedNonBlocking,
  isolatedFlight,
  isolatedForecast,
} from './dashboard';
/**
 * Isso ai
 */
function* rootSaga() {
  yield all([
    fork(loadUser),
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
    takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
    takeLatest(
      'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING',
      loadDashboardNonSequencedNonBlocking
    ),
    fork(isolatedForecast),
    fork(isolatedFlight),
  ]);
}

export default rootSaga;
