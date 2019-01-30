import React from 'react';
import { Col, Row } from 'reactstrap';
import { sectionStyle } from './FeaturesStyle';

const Features = () => (
  <section id="features" style={sectionStyle}>
    <Row>
      <Col md={{ size: 4, offset: 4 }} sm={{ size: 6, offset: 3 }} xs="12">
        <h2>features:</h2>
        <ul>
          <li>2500-year-old book</li>
          <li>read crazy stories about mythical birds, animals, and people</li>
          <li>see confucius say crazy things</li>
          <li>learn stuff!</li>
        </ul>
      </Col>
    </Row>
  </section>
);

export default Features;
