import React, {Component} from 'react';
import Posts from './components/Posts';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render(){ 
    return (
    <div className="App">
    <Header heading = "Post List" />
    <main>
      <Posts />
    </main>
    </div>
  );
  }
}

export default App;
