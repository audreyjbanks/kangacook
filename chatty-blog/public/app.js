import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home';
import BlogList from './components/bloglist';
import BlogDetail from './components/blogdetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
