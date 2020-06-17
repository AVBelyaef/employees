import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EmployesList from '../EmployeesList/EmployesList';
import NewEmployee from '../NewEmployee/NewEmployee';
import EditEmployee from '../EditEmployee/EditEmployee';

const App = () => (
  <div>
    <Switch>
      <Route path="/employees/new"><NewEmployee /></Route>
      <Route path="/employees/:id/edit"><EditEmployee /></Route>
      <Route path="/employees"><EmployesList /></Route>
      <Route path="/" render={() => <Redirect to="/employees" />} />
    </Switch>
  </div>
);

export default App;
