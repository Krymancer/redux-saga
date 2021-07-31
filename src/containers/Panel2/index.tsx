import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';

const Panel2 = (props: any) => {
  useEffect(() => {
    props.loadDashboard();
  }, []);

  return (
    <div className="col-md-4">
      <Card
        title="Panel Non Sequenced"
        user={props.user}
        data={props.dashboard2}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  dashboard2: state.dashboard2,
});

/**
 *
 * @param {any} dispatch
 * @return {any} any
 */
function mapDispatchToProps(dispatch: any): any {
  return {
    loadDashboard: function () {
      return dispatch({type: 'LOAD_DASHBOARD_NON_SEQUENCED'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel2);
