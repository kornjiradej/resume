import React, { Component } from 'react';
import Lottie from 'react-lottie'
import HelloBoy from '../assets/json/hello-boy.json'
class Header extends Component {
   constructor(props) {
    super(props)
    this.state = {
       isStopped: false, isPaused: false
    }
  }
  
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: HelloBoy,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    } 
    const social = [
      {
        "name":"facebook",
        "url":"https://www.facebook.com/KornJiradej/",
        "className":"fa fa-facebook"
      }, 
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/jiradej-p/",
        "className":"fa fa-linkedin"
      }, 
      {
        "name":"github",
        "url":"https://github.com/kornjiradej",
        "className":"fa fa-github"
      } 
    ]
    const nickname = "Korn"
    const occupation= "Front-end Developer"
    const description= "I am looking for a job that company accept new generation. Sustainable and move together."
    const city= "Bangkok"
    const networks= social.map(function(network){
      return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
    })
    return (
      <header id="home"> 
      <nav id="nav-wrap"> 
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li> 
            <li><a className="smoothscroll" href="#Personal">Personal</a></li>  
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <Lottie 
               options={defaultOptions}
               height={150}
               width={150}
               isStopped={this.state.isStopped}
               isPaused={this.state.isPaused}
            />
            <h1 className="responsive-headline">Hi! I'm {nickname}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div> 
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> 
   </header>
    );
  }
}

export default Header;