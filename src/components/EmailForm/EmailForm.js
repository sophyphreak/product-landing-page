import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col
} from 'reactstrap';
import { rowStyle, formStyle, pStyle } from './EmailFromStyle';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }
  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('https://www.freecodecamp.com/email-submit', {
      method: 'POST',
      body: data,
    });
  }
  render() {
    return (
      <Row style={rowStyle}>
      <Col sm={{ size: 4, offset: 4 }}>
      <Form onSubmit={this.onSubmit} style={formStyle} >
      <FormGroup>
      <p style={pStyle} >the bestest, oldest book</p>
      <Input type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter your email" />
      </FormGroup>
      <Button color="primary" >Submit</Button>
      </Form>
      </Col>
      </Row>
    )
  }
}

export default EmailForm;