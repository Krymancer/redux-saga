import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './pages/Main';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
    </BrowserRouter>
  );
};

export default AppRouter;
