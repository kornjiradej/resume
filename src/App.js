import React, { Component } from 'react';
import ReactGA from 'react-ga'; 
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume'; 
import Personal from './Components/Personal'; 
import "antd/dist/antd.css"
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }
 
  render() { 
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/> 
        <Personal data={this.state.resumeData.Personal}/> 
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
