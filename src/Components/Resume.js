import React, { Component } from 'react';
import { Divider, Progress } from 'antd' 
import Skill from '../assets/json/skill.json'
import Lottie from 'react-lottie'

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {isStopped: false, isPaused: false}  
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: Skill,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    const resume = { 
      "education":[
        {
          "school":"KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK",
          "degree":"Bachelor",
          "graduated":"August 2015 - February 2019",
          "description":"Department of Computer Science",
          "website": "https://www.kmutnb.ac.th/"
        },
        {
          "school":"High School: Sakolraj",
          "degree":"Grade 12",
          "graduated":"March 2011 - March 2014",
          "description":"Science-Mathematics",
          "website": "http://www.sakolraj.ac.th/"
        }
      ],
      "project": [
        {
          "name": "E-Document search system on blockchain(Final Project)",
          "website": "-", 
          "description": "This project is my final project. E-Document search system on blockchain is document store on blockchain. Safe ,Transparent and verifiable",
          "tool": [
            {
              "name" : "React JS",
              "id": "reactjs",
              "icon": "",
              "website": "https://reactjs.org/" 
            },
            {
              "name" : "Ant-Design",
              "id": "antd",
              "icon": "",
              "website": "https://ant.design/" 
            }, 
            {
              "name" : "Ant-Design",
              "id": "antd",
              "icon": "",
              "website": "https://ant.design/" 
            },
            {
              "name" : "CSS",
              "id": "css",
              "icon": "",
              "website": "https://www.w3schools.com/css/" 
            },
            {
              "name" : "HTML",
              "id": "html",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "HTML",
              "id": "html",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "JavaScript",
              "id": "javascript",
              "icon": "",
              "website": "https://www.javascript.com/" 
            }, 
            {
              "name" : "JavaScript",
              "id": "javascript",
              "icon": "",
              "website": "https://www.javascript.com/" 
            },
            {
              "name" : "Github",
              "id": "github",
              "icon": "",
              "website": "https://github.com/" 
            } 
          ]
        },
        {
          "name": "Enter Corporation",
          "website": "https://entercorp.net/",
          "description": "This is my internship project. I'am software developer and internship for 2 month.",
          "tool": [
            {
              "name" : "Vue.js",
              "id": "vue",
              "icon": "",
              "website": "https://vuejs.org/" 
            },
            {
              "name" : "Bootstrap 4",
              "id": "bootstrap",
              "icon": "",
              "website": "https://getbootstrap.com/docs/4.4/getting-started/introduction/" 
            },  
            {
              "name" : "CSS",
              "id": "css",
              "icon": "",
              "website": "https://www.w3schools.com/css/" 
            },
            {
              "name" : "HTML",
              "id": "html",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "GitKraKen",
              "id": "gitkraken",
              "icon": "",
              "website": "https://www.gitkraken.com/" 
            },
            {
              "name" : "Laravel",
              "id": "laravel",
              "icon": "",
              "website": "https://laravel.com/" 
            }  
          ]
        },
        {
          "name": "Online Testing",
          "description": "This software is website that provide exam and testing online.",
          "website": "https://onlinetesting.ipst.ac.th/",
          "tool": [
            {
              "name" : "React JS",
              "id": "reactjs",
              "icon": "",
              "website": "https://reactjs.org/" 
            },
            {
              "name" : "Ant-Design 3",
              "id": "antd",
              "icon": "",
              "website": "https://ant.design/" 
            },  
            {
              "name" : "CSS",
              "id": "css",
              "icon": "",
              "website": "https://www.w3schools.com/css/" 
            },
            {
              "name" : "SCSS",
              "id": "scss",
              "icon": "",
              "website": "https://sass-lang.com/documentation/syntax" 
            },
            {
              "name" : "HTML5",
              "id": "html5",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "GitKraKen",
              "id": "gitkraken",
              "icon": "",
              "website": "https://www.gitkraken.com/" 
            },
            {
              "name" : "Jira",
              "id": "jira",
              "icon": "",
              "website": "https://jira.atlassian.com/" 
            }  
          ]
        },
        {
          "name": "Exam Bank",
          "description": "The Exam Bank is website can create and store all exam and note then sent to kiddy(website,app) and official(app) project.",
          "website": "https://exambank.sobtid.me/login",
          "tool": [
            {
              "name" : "React JS",
              "id": "reactjs",
              "icon": "",
              "website": "https://reactjs.org/" 
            },
            {
              "name" : "React Hook",
              "id": "reacthook",
              "icon": "",
              "website": "https://reactjs.org/docs/hooks-intro.html" 
            },
            {
              "name" : "Ant-Design 4",
              "id": "antd",
              "icon": "",
              "website": "https://ant.design/" 
            },   
            {
              "name" : "CSS",
              "id": "css",
              "icon": "",
              "website": "https://www.w3schools.com/css/" 
            },
            {
              "name" : "SCSS",
              "id": "scss",
              "icon": "",
              "website": "https://sass-lang.com/documentation/syntax" 
            },
            {
              "name" : "HTML",
              "id": "html",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "GitKraKen",
              "id": "gitkraken",
              "icon": "",
              "website": "https://www.gitkraken.com/" 
            },
            {
              "name" : "Asana",
              "id": "asana",
              "icon": "",
              "website": "https://asana.com/" 
            },
            {
              "name" : "JavaScript ES6",
              "id": "jses6",
              "icon": "",
              "website": "https://www.w3schools.com/js/js_es6.asp" 
            }  
          ]
        },
        {
          "name": "Junior sobtid",
          "description": "Junior sobtid is online testing for kids grade 1 - 6.",
          "website": "https://junior.sobtid.me/home",
          "tool": [
            {
              "name" : "React JS",
              "id": "reactjs",
              "icon": "",
              "website": "https://reactjs.org/" 
            },
            {
              "name" : "React Hook",
              "id": "reacthook",
              "icon": "",
              "website": "https://reactjs.org/docs/hooks-intro.html" 
            },
            {
              "name" : "Ant-Design 4",
              "id": "antd",
              "icon": "",
              "website": "https://ant.design/" 
            },   
            {
              "name" : "CSS",
              "id": "css",
              "icon": "",
              "website": "https://www.w3schools.com/css/" 
            },
            {
              "name" : "SCSS",
              "id": "scss",
              "icon": "",
              "website": "https://sass-lang.com/documentation/syntax" 
            },
            {
              "name" : "HTML",
              "id": "html",
              "icon": "",
              "website": "https://www.w3schools.com/html/" 
            },
            {
              "name" : "GitKraKen",
              "id": "gitkraken",
              "icon": "",
              "website": "https://www.gitkraken.com/" 
            },
            {
              "name" : "Asana",
              "id": "asana",
              "icon": "",
              "website": "https://asana.com/" 
            },
            {
              "name" : "JavaScript ES6",
              "id": "jses6",
              "icon": "",
              "website": "https://www.w3schools.com/js/js_es6.asp" 
            }  
          ]
        }
      ],
      "experience":[
        {
          "company":"Enter Coperation",
          "title":"Front-end Developer",
          "years":"01-05-2018 - 29-06-2018",
          "description":"Develop website of Enter co.(Internship)"
        },
        {
          "company":"Sobtid Edutainment Coporation.",
          "title":"Front-end Developer",
          "years":"01-09-2019 - present",
          "description":"Project Online Testing, Exam Bank, Junior Sobtid."
        }
      ],
      "skills":[
        {
          "name":"React Js: React Hook, Redux", 
          "percent" : "90"
        },
        {
          "name":"Vue.Js", 
          "percent" : "30"
        },
        {
          "name":"Laravel", 
          "percent" : "10"
        },
        {
          "name":"Bootstrap 4", 
          "percent" : "60"
        },
        {
          "name":"Ant-Design", 
          "percent" : "90"
        }, 
        {
          "name":"JavaScript", 
          "percent" : "80"
        },
        {
          "name":"HTML5", 
          "percent" : "80"
        },
        {
          "name":"CSS", 
          "percent" : "80"
        },
        {
          "name":"SCSS", 
          "percent" : "70"
        },
        {
          "name":"Git: GitHub Desktop, GitKraken", 
          "percent" : "80"
        }, 
        {
          "name":"Asana", 
          "percent" : "90"
        },
        {
          "name":"Jira", 
          "percent" : "40"
        }
      ]
    }
    const education = resume.education.map(function(education){
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p>
      <p><a href={education.website} target={'_blank'}>{education.website}</a></p>
      </div>
    })

    const project = resume.project.map((project) => {
      return <div key={project.name}><h3>{project.name}</h3> 
        <p><span>Description: </span> {project.description}</p>
        <p><span>Website: </span><a href={project.website} target={'_blank'}>{project.website}</a></p> 
        <p>
          <span>Tool: </span>
        { 
          project.tool.map((t,i) => {
            return <a key={i} href={t.website} target={'_blank'} style={{ marginRight: '5px' }}>{`${t.name},`}</a>
          })
        }
        </p> 
        <Divider style={{ background: '#161415' }}/>
      </div>
    })
    const experience = resume.experience.map(function(experience){
      return <div key={experience.company}><h3>{experience.company}</h3>
          <p className="info">{experience.title}<span>&bull;</span> <em className="date">{experience.years}</em></p>
          <p>{experience.description}</p>
          <p><a href={education.website} target={'_blank'}>{education.website}</a></p>
      </div>
    })
    const skills = resume.skills.map(function(skills,i){  
      return <div key={i}><h2>{skills.name}</h2><Progress percent={skills.percent} size="small" status="active" strokeColor='#15CF62'/></div>
    })
    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work"> 
         <div className="three columns header-col">
            <h1><span>Project</span></h1>
         </div> 
         <div className="nine columns main-col">
          {project}
        </div>
    </div>

      <div className="row work"> 
         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div> 
         <div className="nine columns main-col">
                {experience}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
 
				<div className="bars">
        <Lottie options={defaultOptions}
              height={200}
              width={200}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;