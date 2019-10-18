import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Navigation from './components/Navigation';
import NewJobPostsPage from './pages/NewJobPostsPage';
import SavedJobPostsPage from './pages/SavedJobPosts';





class App extends React.Component {
  render() {
    return(
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/posts/saved" component={SavedJobPostsPage}/>
              <Route path="/" component={NewJobPostsPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
