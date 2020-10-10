import React, { Component } from 'react';
import { Row, Col, Badge } from 'antd'
import Lottie from 'react-lottie'
import personalAnimation from '../assets/json/personal.json'

class Personal extends Component {
   constructor(props) {
      super(props)
      this.state = {isStopped: false, isPaused: false}
    }
  render() {
   const colors = [
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime',
    ]
   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: personalAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    if(this.props.data){
      var Personal = this.props.data.Personal.map((Personal,i) => { 
         return <p><Badge style={{ color: 'white', fontSize: '20px' }} color={colors[i]} text={Personal} /></p>
      })
    }

    return (
      <section id="Personal"> 
         <Row className='row'>
            <Col lg={12} md={12} xs={24} style={{ textAlign: 'center' }}>
               <h3 style={{ color: 'white', textShadow: 'rgb(0, 0, 0) 1px 1px 3px' }}>Personal Qualities</h3>
               { Personal }
            </Col>
            <Col lg={12} md={12} xs={24} >
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
            </Col>
         </Row>
   </section>
    );
  }
}

export default Personal;
