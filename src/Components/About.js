import React, { Component } from 'react'
import { Row, Col } from 'antd' 
import Lottie from 'react-lottie'
import developer from '../assets/json/developer.json'
class About extends Component {
   constructor(props) {
      super(props)
      this.state = {isStopped: false, isPaused: false}
    }
  render() { 
   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: developer,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    const profilepic= "images/profilepic.svg" 
    const resumeDownload = "https://drive.google.com/file/d/14V3eIwe2oxC75oGt-T8dRyJ8xuTLgOd-/view?usp=sharing";

    return (
      <section id="about">
      <Row className='row'>
         <Col md={12} lg={12} xs={24}>
            <Lottie options={defaultOptions}
               height={200}
               width={200}
               isStopped={this.state.isStopped}
               isPaused={this.state.isPaused}/>  
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <a href={resumeDownload} style={{ backgound: '#a52525',color: 'white' }} className="button" 
               target="_blank"
               ><i className="fa fa-download"></i>Download Resume</a>
            </div>
         </Col>
         <Col md={12} lg={12} xs={24}>
         <div style={{ width: '100%', textAlign: 'center'}}>
               <embed className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
               <h2>About Me</h2>
            </div>
             
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Nickname</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>Korn</span></Col>
            </Row>
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Name</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>Jiradej Panjapornsiwanukul</span></Col>
            </Row>
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Age</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>24</span></Col>
            </Row>
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Date of Birth</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>05-11-1996</span></Col>
            </Row>
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Nationality</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>Thai</span></Col>
            </Row>
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Address</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>Huai Khwang Bangkok</span></Col>
            </Row> 
            <Row style={{ color: 'white' }}>
               <Col span={12} style={{ textAlign: 'right'}}><span style={{ marginRight: '10px' }}>Email</span></Col>
               <Col span={12} ><span style={{ marginLeft: '10px' }}>kornjiradej@gmail.com</span></Col>
            </Row> 
         </Col>
      </Row> 
   </section>
    );
  }
}

export default About;