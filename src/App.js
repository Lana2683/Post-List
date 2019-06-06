import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts';
import Header from './components/Header';
import AddPost from './components/AddPost'; 
import Post from './components/Post'

import { Provider } from './context'

import './App.css';

class App extends Component {
  render(){ 
    return (
      <Provider>
        <Router>
        <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/post-page" component={Post} />
          </Switch>
        </main>
        </div>
        </Router>
      </Provider>
  );
  }
}

export default App;
