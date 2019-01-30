import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row
} from 'reactstrap';
import { sectionStyle, divStyle, cardBodyStyle } from './PricingStyle';

const Pricing = () => (
  <section id="pricing" style={sectionStyle}>
    <Row>
      <Col md={{ size: 4, offset: 4 }} sm={{ size: 4, offset: 3 }} xs="12">
        <h2>Pricing:</h2>
      </Col>
    </Row>
    <div style={divStyle}>
      <Row>
        <Col md={{ size: 2, offset: 3 }} sm={{ size: 4 }} xs="12">
          <Card>
            <CardBody style={cardBodyStyle}>
              <CardTitle>
                <strong>Basic Writings: Kindle Version</strong>
              </CardTitle>
              <CardSubtitle>$16.87</CardSubtitle>
              <CardText>
                It's the best stuff in the most portable format
              </CardText>
              <Button
                color="link"
                href="https://www.amazon.com/Zhuangzi-Basic-Writings-Translations-Classics-ebook-dp-B007C5Z3HG/dp/B007C5Z3HG/ref=mt_kindle?_encoding=UTF8&me=&qid=1548839348"
              >
                See on Amazon
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={{ size: 2 }} sm={{ size: 4 }} xs="12">
          <Card>
            <CardBody style={cardBodyStyle}>
              <CardTitle>
                <strong>Basic Writings: Paperback Version</strong>
              </CardTitle>
              <CardSubtitle>$25.20</CardSubtitle>
              <CardText>It's in a version you can hold in your hand</CardText>
              <Button
                color="link"
                href="https://www.amazon.com/Zhuangzi-Basic-Writings-dp-0231129599/dp/0231129599/ref=mt_paperback?_encoding=UTF8&me=&qid=1548839348"
              >
                See on Amazon
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={{ size: 2 }} sm={{ size: 4 }} xs="12">
          <Card>
            <CardBody style={cardBodyStyle}>
              <CardTitle>
                <strong>Complete Writings</strong>
              </CardTitle>
              <CardSubtitle>$53.11</CardSubtitle>
              <CardText>Get it all!!!</CardText>
              <Button
                color="link"
                href="https://www.amazon.com/Complete-Works-Zhuangzi-Translations-Classics/dp/0231164742/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548839348&sr=8-1"
              >
                See on Amazon
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </section>
);

export default Pricing;
