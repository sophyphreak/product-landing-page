import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
  FormFeedback
} from 'reactstrap';
import { rowStyle, formStyle, pStyle } from './EmailFromStyle';
import validateEmail from './validation/validateEmail';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false
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
    if (validateEmail(this.state.email)) {
      const email = '';
      const invalidEmail = false;
      this.setState({ email, invalidEmail });
      alert('email received!');
    } else {
      const invalidEmail = true;
      this.setState({ invalidEmail });
    }
  }
  render() {
    return (
      <Row style={rowStyle}>
      <Col sm={{ size: 4, offset: 4 }}>
      <Form onSubmit={this.onSubmit} style={formStyle} >
      <FormGroup>
      <p style={pStyle} >the bestest, oldest book</p>
      <Input invalid={this.state.invalidEmail} type="email" value={this.state.email} onChange={this.handleChange} placeholder="enter your email" />
      <FormFeedback>Please enter email.</FormFeedback>
      </FormGroup>
      <Button color="primary" >Submit</Button>
      </Form>
      </Col>
      </Row>
    )
  }
}

export default EmailForm;