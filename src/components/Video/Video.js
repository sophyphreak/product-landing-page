import React from 'react';
import YouTube from 'react-youtube';
import { Row, Col } from 'reactstrap';
import { sectionStyle, divStyle } from './VideoStyle';

const Video = () => (
  <section style={sectionStyle} id="how-it-works">
  <Row>
  <Col sm={{ size: 4, offset: 3 }} xs="12" >
  <h2>how it works:</h2>
  
  </Col>
  </Row>
  <div style={divStyle} >
  <YouTube 
    videoId={'4wOtPOo_vlM'}
  />
  
  </div>
  </section>
)

export default Video;