import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardEditor from './DashboardEditor';
import Chart from 'chart.js/auto';
import { Sidebar, Breadcrumb } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Breadcrumb />
          <Switch>
            <Route path="/dashboard" component={DashboardEditor} />
            <Route path="/" exact>
              <h1>Welcome to Tracksy</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
