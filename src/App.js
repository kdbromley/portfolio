import { Component, Link } from 'react';
import { Route } from 'react-router';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import { STORE } from './projects-store';
import './App.css';
import Button from './Button/Button';

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
    if (window.scrollY > 28) {
      document.querySelector('.header__title-container').className='header__title-container sticky';
      var headHeight = document.querySelector('.header__title-container').offsetHeight
      page.style.paddingTop = (headHeight + 35 ) + 'px';
    } else {
      document.querySelector('.header__title-container').className='header__title-container';
      page.style.paddingTop = 5 + 'px'
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
          <div className={`header__title-container`}>
            <h1 className={`header__title`} id='title'>
              K.D.<span> </span>BROMLEY
            </h1>
            <Button aria-label='Open navbar menu' label='menu' class='menu' />
          </div>
         { this.state.isNavbarVis &&
           <Navbar aria='true' classes='' /> }
           <Navbar aria='false' classes='screenreader'/>
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

