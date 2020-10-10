import React, { Component } from 'react';

class Footer extends Component {
  render() {
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
    const networks= social.map(function(network){
      return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>
    })
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul> 
           <h4 style={{ color: 'white',textShadow: '1px 1px 3px rgb(0 0 0)' }}>Thank you for watching &bull; Korn jiradej</h4>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
