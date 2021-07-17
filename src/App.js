import { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import menuIcon from './img/menu.svg';
import profPic from './img/IMG_4289.jpeg';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import { STORE } from './projects-store';
import './App.css';

export default class App extends Component {
  state = {
    isDesktopNavbarVis: false,
    isMobileNavbarVis: false,
    isMobile: false,
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if(window.innerWidth < 600) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var page = document.querySelector('main');
    if (window.scrollY > 26) {
      document.querySelector('.header__title-container').className='header__title-container sticky';
      document.querySelector('.header__title').className='header__title sticky-text';
      var headHeight = document.querySelector('.header__title-container').offsetHeight
      page.style.paddingTop = (headHeight + 39 ) + 'px';
      document.querySelector('.profPic').className='profPic smaller';
    } else {
      document.querySelector('.header__title-container').className='header__title-container';
      document.querySelector('.header__title').className='header__title';
      page.style.paddingTop = 5 + 'px';
      document.querySelector('.profPic').className='profPic'
    }
  };

  handleMenuClick = (e) => {
    let id = (e.currentTarget.id)
    if(id === 'Desktop') this.setState({ isDesktopNavbarVis: !this.state.isDesktopNavbarVis })
    if(id === 'Mobile') this.setState({ isMobileNavbarVis: !this.state.isMobileNavbarVis })
  }

  renderRoutes() {
    return(
      <>
      <Route 
       exact
       path='/'
       render={() => 
        <>
        <div className='Projects'>
         <h3>Projects</h3>
         {STORE.projects.map(project => 
           <Project key={project.id} project={project} />
         )}
         </div>
        <div className='About'>
         <h3>About</h3>
         <About />
        </div>
         <Contact />
        </>}
      />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className={`header__title-container`}>
            <Link to='/'> 
             <h1 className={`header__title`} id='title'> 
                K.D.<span> </span>BROMLEY
             </h1>
            </Link>
            {(this.state.isMobile === false) &&
             <button id='Desktop' className='menu-button desktop' aria-label='Open navbar menu'
             onClick={this.handleMenuClick}>
              <img src={menuIcon} alt='Navbar Menu Icon' className='desktop-menu-icon' />
            </button>
            }
          </div>
         { this.state.isDesktopNavbarVis &&
           <Navbar aria='true' classes='Navbar__desktop' /> }
           <Navbar aria='false' classes='screenreader'/>
        </header>
        <main>
          <div className='Bio'>
            <img src={profPic} alt='Me, looking at the camera, against a background of forest and hills' className='profPic'/>
            <div className='Bio__text'>
              <p>Upcoming graduate of the certificate program in Software Engineering at Thinkful. Front-end focused but with backend experience.
                <a href='#contact'className='hire-me'> Currently looking employment as a Jr. Web Developer! </a> 
              </p>
            </div>
          </div>
          <div className='Projects' id='projects'>
            <h3 className='Projects__title'>Projects</h3>
            {STORE.projects.map(project => 
              <Project key={project.id} project={project} />
            )}
          </div>
          <div className='About' id='about'>
            <h3>About</h3>
            <About />
          </div>
          <div className='Contact' id='contact'>
            <Contact />
          </div>
          <div className='Menu__mobile'>
          {(this.state.isMobile === true) && 
           <button id='Mobile' className='menu-button mobile' 
            aria-label='Open navbar menu'
            onClick={this.handleMenuClick}>
              <img src={menuIcon} className='mobile-menu-icon' alt='Navbar Menu Icon' />
           </button>
          }
          { this.state.isMobileNavbarVis &&
           <Navbar aria='true' classes='Navbar__mobile' /> 
          }
          </div>
        </main>
        <footer>
          © 2021 k.d. Bromley
        </footer>
      </div>
    );
  }
}

