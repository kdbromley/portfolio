import { Component, Link } from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header__title'>
            k.d. Bromley
          </h1>
        </header>
        <main>
          <div>
          </div>
        </main>
      </div>
    );
  }
}

