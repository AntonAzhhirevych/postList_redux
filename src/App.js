import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Post from './pages/PagePost';
import Posts from './pages/PagePosts';
import Create from './pages/PageCreate';
import PageNotFound from './pages/PageNotFound';
import Update from './pages/UpdatePage';
import Modal from './components/Modal/ModalContainer';

function App() {
  return (
    <div>
      <Modal />

      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/update" exact component={Update} />

        <Route path="/create" component={Create} />
        {/* <Redirect to="/posts" /> */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
