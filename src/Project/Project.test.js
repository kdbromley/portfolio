import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Project from './Project';

const project =          
{
    "id": 1,
    "name": 'on AUX',
    "description": `Second fullstack capstone for Thinkful - a music sharing social media app. Frontend built 
        with React. Backend is an Express server and PostgreSQL database. Also utilizes Spotify's API.`,
    "tech": ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'SQL/Knex', 'Fetch API calls'],
    "link": 'https://github.com/kdbromley/minder-app'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <Project  project={project} />
  </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
