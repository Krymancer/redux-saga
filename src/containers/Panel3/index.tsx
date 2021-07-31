import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';

const Panel3 = (props: any) => {
  useEffect(() => {
    props.loadDashboard();
  }, []);

  return (
    <div className="col-md-4">
      <Card
        title="Panel Non Sequenced Non Blocking"
        user={props.user}
        data={props.dashboard3}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  dashboard3: state.dashboard3,
});

/**
 *
 * @param {any} dispatch
 * @return {any} any
 */
function mapDispatchToProps(dispatch: any): any {
  return {
    loadDashboard: function () {
      return dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel3);
