import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
   <Button />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
