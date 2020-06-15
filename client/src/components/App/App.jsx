import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployesList from '../EmployeesList/EmployesList';

const App = () => (
  <div>
    <Switch>

      <Route path="/employees"><EmployesList /></Route>
      <Route path="/" render={() => <Redirect to="/employees" />} />
    </Switch>
  </div>
);

export default App;
