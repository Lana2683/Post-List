import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import PostInfo from './components/PostInfo';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost'; 
// import Comments from './components/Comments';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';

class App extends PureComponent {
  render(){ 
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post-info/:id" component={PostInfo} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/post-info/edit-post/:id" component={EditPost} />
            {/* <Route exact path="/comments?postId=:postId" component={Comments} /> */}
          </Switch>
        </main>
        </div>
        </Router>
      </Provider>
  );
  }
}

export default App;
