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
    if(this.props.data){ 
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
        <p><a href={education.website} target={'_blank'}>{education.website}</a></p>
        </div>
      })

      var project = this.props.data.project.map((project) => {
        return <div key={project.name}><h3>{project.name}</h3>
          {/* <p><em className="date">{'Icons Icons'}</em></p> */} 
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
      var experience = this.props.data.experience.map(function(experience){
        return <div key={experience.company}><h3>{experience.company}</h3>
            <p className="info">{experience.title}<span>&bull;</span> <em className="date">{experience.years}</em></p>
            <p>{experience.description}</p>
            <p><a href={education.website} target={'_blank'}>{education.website}</a></p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        // return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
        return <p><h2>{skills.name}</h2><Progress percent={skills.percent} size="small" status="active" strokeColor='#15CF62'/></p>
      })
    }

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