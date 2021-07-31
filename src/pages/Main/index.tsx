import React from 'react';
import Panel from '../../containers/Panel';
import Panel2 from '../../containers/Panel2';
import Panel3 from '../../containers/Panel3';

import './Main.scss';

const Main: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Panel />
        <Panel2 />
        <Panel3 />
      </div>
    </div>
  );
};

export default Main;
