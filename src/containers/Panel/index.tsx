import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';

const Panel = (props: any) => {
  useEffect(() => {
    props.loadDashboard();
  }, []);

  return (
    <div className="col-md-4">
      <Card title="Panel Sequenced" user={props.user} data={props.dashboard} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  dashboard: state.dashboard,
});

/**
 *
 * @param {any} dispatch
 * @return {any} any
 */
function mapDispatchToProps(dispatch: any): any {
  return {
    loadDashboard: function () {
      return dispatch({type: 'LOAD_DASHBOARD'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
