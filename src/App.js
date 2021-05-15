import { Component, Link } from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import { STORE } from './projects-store';
import './App.css';

export default class App extends Component {
  findProject = (projectName) => {
    return STORE.projects.find(project => project.name === projectName)
  }

  renderRoutes() {
    return(
      <>
      <Route 
       exact
       path='/'
       render={() => 
        <>
         <About />
         <h2>Projects</h2>
         {STORE.projects.map(project => 
         <Project key={project.id} project={project} />
         )}
         <Contact />
        </>}
      />
      <Route
       path='/:projectName'
       render={(props) => 
        <Project {...props} project={this.findProject(props.match.params.projectName)}/>
       }
       />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header__title'>
            K.D. BROMLEY
          </h1>
          <Navbar />
        </header>
        <main>
          {this.renderRoutes()}
        </main>
        <footer>
          © 2021 k.d. Bromley
        </footer>
      </div>
    );
  }
}

