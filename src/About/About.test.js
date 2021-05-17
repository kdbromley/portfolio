import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <About />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
