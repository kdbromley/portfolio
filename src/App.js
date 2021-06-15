import { Component } from 'react';
import { Route } from 'react-router';
import menuIcon from './img/menu.svg';
import placeholderImg from './img/placeholder.png'
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import { STORE } from './projects-store';
import './App.css';
import { Link } from 'react-router-dom';

export default class App extends Component {
  state = {
    isNavbarVis: false,
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
    } else {
      document.querySelector('.header__title-container').className='header__title-container';
      document.querySelector('.header__title').className='header__title';
      page.style.paddingTop = 5 + 'px'
    }
  };

  handleMenuClick = () => {
    this.setState({isNavbarVis: !this.state.isNavbarVis})
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
   /* if(this.state.isMobile) {
      document.querySelector('.mobile').className='menu-button mobile'
      document.querySelector('.desktop').className='menu-button desktop invisible'
    } else {

      document.querySelector('.desktop').className='menu-button desktop'
      document.querySelector('.mobile').className='menu-button mobile invisible'
    }*/
    return (
      <div className="App">
        <header>
          <div className={`header__title-container`}>
            <Link to='/'> <h1 className={`header__title`} id='title'>
              K.D.<span> </span>BROMLEY
            </h1>
            </Link>
            <button className='menu-button desktop' aria-label='Open navbar menu'
             onClick={this.handleMenuClick}>
              <img src={menuIcon} alt='Navbar Menu Icon' />
            </button>
          </div>
         { this.state.isNavbarVis &&
           <Navbar aria='true' classes='' /> }
           <Navbar aria='false' classes='screenreader'/>
        </header>
        <main>
          <div className='bio'>
            <img src={placeholderImg} alt='placeholder' />
          </div>
          {this.renderRoutes()}
          <button className='menu-button mobile' aria-label='Open navbar menu'
           onClick={this.handleMenuClick}>
              <img src={menuIcon} alt='Navbar Menu Icon' />
          </button>
        </main>
        <footer>
          © 2021 k.d. Bromley
        </footer>
      </div>
    );
  }
}

