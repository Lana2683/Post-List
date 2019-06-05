import React, {Component} from 'react';
import Posts from './components/Posts';
import Header from './components/Header';
import AddPost from './components/AddPost'; 

import { Provider } from './context'

import './App.css';

class App extends Component {
  render(){ 
    return (
      <Provider>
        <div className="App">
        <Header heading = "Post List" />
        <main>
          <AddPost />
          <Posts />
        </main>
        </div>
      </Provider>
  );
  }
}

export default App;
