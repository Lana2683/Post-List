import React, {Component} from 'react';
import Post from './components/Post';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render(){ 
    return (
    <div className="App">
    <Header heading = "Post List" />
    <Post title="eveniet quod temporibus" body="reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"/>
    <Post title="sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio" body="suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"/>
    </div>
  );
  }
}

export default App;
