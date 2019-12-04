import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInsert from '../pages/UserInsert'
import UserUpdate from '../pages/UserUpdate'
import UserList from '../pages/UserList'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = lazy(() => import('../components/Navbar'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/create" exact component={UserInsert} />
        <Route
            path="/update/:id"
            exact
            component={UserUpdate}
        />
      </Switch>
    </Router>
  );
}

export default App;
