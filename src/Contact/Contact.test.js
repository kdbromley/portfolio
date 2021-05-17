import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <Contact />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
