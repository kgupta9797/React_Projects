import { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div><NavBar/>
      <News/>
      
       </div>

    )
  }
}
