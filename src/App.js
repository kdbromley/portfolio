import { Component, Link } from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import { STORE } from './projects-store';
import './App.css';

export default class App extends Component {
  state = {
    isNavbarVis: false
  }
  
  findProject = (projectName) => {
    return STORE.projects.find(project => project.name === projectName)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var page = document.querySelector('main');
    if (window.scrollY > 30) {
      document.querySelector('.header__title').className='header__title sticky';
      var navHeight = document.querySelector('.header__title').offsetHeight
      page.style.paddingTop = navHeight + 'px';
    } else {
      document.querySelector('.header__title').className='header__title';
      page.style.paddingTop = 0 + 'px'
    }
  };

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
          <div>
            <h1 className={`header__title`} id='title'>
              K.D.<span> </span>BROMLEY
            </h1>
          </div>
         { this.state.isNavbarVis &&
           <Navbar /> }
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

