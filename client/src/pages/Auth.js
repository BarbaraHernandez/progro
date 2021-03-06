import React, { Component } from 'react';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { Form, FormGroup, Label, Input, Button, Small } from '../components/Form';
import { Card } from '../components/Card';

class Register extends Component {
  state = {
    pageTitle: 'ProGro Login',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    message: '',
    success: false,
    register: false,
  };

  componentDidMount() {
    document.title=this.state.pageTitle;
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleFormChange = event => {
    this.setState({ message: '', register: event })
  };

  handleRegisterUser = event => {
    event.preventDefault();

    if (
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.email === '' ||
      this.state.password === ''
    ) {
      this.setState({
        message: 'Please populate all fields'
      });
    } else {
      API
        .registerUser({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          username: this.state.email,
          password: this.state.password,
          hoursEarned: 0,
          hoursRedeemed: 0,
          createdAt: Date.now(),
          updatedAt: Date.now()
        })
        .then(res => {
          //this.setState({ success: true, message: res.data.message });
          API
            .loginUser({
              username: this.state.email,
              password: this.state.password,
            })
            .then(() => {
              this.setState({ success: true });
            })
            .catch(error => {
              this.setState({ message: error.response.data.message });
            });
        })
        .catch(error => {
          this.setState({ message: error.response.data.message });
        });
    }
  };

  handleLoginUser = event => {
    event.preventDefault();

    if (
      this.state.email === '' ||
      this.state.password === ''
    ) {
      this.setState({
        message: 'Please populate all fields'
      });
    } else {
      API
        .loginUser({
          username: this.state.email,
          password: this.state.password,
        })
        .then(() => {
          this.setState({ success: true });
        })
        .catch(error => {
          this.setState({ message: error.response.data.message });
        });
    };
  };

  render() {
    return (
      <Container fluid>
      <img id='login-logo' src='images/progrologo.png' alt='brand logo'></img>
        <Row>
          <Col size='md-4'>
          </Col>
          <Col size='md-4'>
          <div id='login-card'>
          <Card>
            <div id='login-head'>
              <h1>ProGro</h1>
              <h2>Take Initiative.</h2>
            </div>
            {this.state.success ? (
              <Redirect to='/profile' />
            ) : (
                <Form onSubmit={this.state.register ? this.handleRegisterUser : this.handleLoginUser}>
                  {this.state.message &&
                    <div className='alert alert-danger' role='alert'>
                      {this.state.message}
                    </div>
                  }
                  {this.state.register &&
                    <div>
                      <FormGroup>
                        <Label htmlFor='firstName' className='field-head'>First Name</Label>
                        <Input
                          type='text'
                          id='firstName'
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor='lastName' className='field-head'>Last Name</Label>
                        <Input
                          type='text'
                          id='lastName'
                          value={this.state.lastName}
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </div>
                  }
                  <FormGroup>
                    <Label htmlFor='email' className='field-head'>Email</Label>
                    <Input
                      type='email'
                      id='email'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <Small>Please use a corporate email address.</Small>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor='password' className='field-head'>Password</Label>
                    <Input
                      type='password'
                      id='password'
                      onChange={this.handleInputChange}
                    />
                    <Small>Authentication is secured with bcrypt and JWT.</Small>
                  </FormGroup>
                  <div className='text-center'>
                  <Button type='submit' className='btn blue-btn'>
                    {this.state.register ? 'Register' : 'Login'}
                  </Button>
                  <Button
                    type='button'
                    className='btn btn-link'
                    id='my-link-btn'
                    onClick={() => this.handleFormChange(this.state.register ? false : true)}
                  >
                    {this.state.register ? 'Already have an account?' : 'Need to register?'}
                  </Button>
                  </div>
                </Form>
              )}
              </Card>
              </div>
          </Col>
        </Row>
        <div>
          <img className='bottom-art' src='images/progrobg.png' alt='decorative background'></img>
          <p className='footer-p'>Visit <a className='contrast-link' href='https://github.com/BarbaraHernandez/progro/#readme'>GitHub</a> for More Information</p></div>
      </Container>
    );
  }
}

export default Register;
