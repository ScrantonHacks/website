import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reqwest from 'reqwest';
import isemail from 'isemail';
import styled from 'styled-components';

import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';

import SplashButton from '../SplashButton';



const { string } = PropTypes;

//scrantonhacks.us16.list-manage.com/subscribe/post?u=5d0b0c770c04055d190170b52&amp;id=27660098a2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form
const FormContainer = styled.div`
  color: #fff;
  text-align: center;
`;

const StyledText = styled.p`
  color: #fff !important;
  text-align: center;
  max-width: 100% !important;
`;

const SubscribeForm = styled(Form)`
  width: 100% !important;
`;

const InputField = styled(TextInput)`
  width: 23.3em;
  background-color: rgba(73, 69, 82, 0.8) !important;
`;

export default class MailchimpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      isTyping: false,
      submitted: false,
      buttonValue: props.buttonValue,
      showError: props.showError,
      completeMessage: props.completeMessage,
      helpText: props.helpText,
      action: props.action,
    }
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValid = this.getValid.bind(this);
  }

  static get defaultProps () {
    return {
      buttonValue: 'Subscribe',
      buttonStyles: 'button',
      placeholder: 'Email Address',
      completeMessage: 'Thanks for subscribing',
      helpText: 'Please provide a valid email address',
      showError: true,
      emailAddress: '',
      action: null
    }
  }

  handleSubmit(e) {
    console.log(this.state.action);
    e.preventDefault();
    let self = this;
    let isValid = this.state.valid;

    if (isValid) {
      reqwest({
        method: 'get',
        type: 'jsonp',
        contentType: 'application/json',
        url: this.state.action,
        data: {EMAIL: this.state.emailAddress, STATUS: 'subscribed'},
        jsonpCallback: 'c'
      })
      .then(function (resp) {
        self.setState({
          submitted: true
        })
      })
      .fail(function (err, msg) {
        console.log(err)
        self.setState({
          submitted: true
        })
      })
      .always(function (resp) {
        self.setState({
          submitted: true
        })
      });
      self.setState({
        submitted: true
      });
    }
  }

  validateEmail(e) {
    let self = this;
    this.setState({
      typing: true
    });

    if(isemail.validate(e.currentTarget.value)) {
      this.setState({
        valid: true,
        emailAddress: e.currentTarget.value,
      })
    } else {
      this.setState({
        valid: false,
      });
    }
  }

  getValid() {
    let styles;
    if (this.state.isTyping) {
      styles += ` ${this.state.valid ? 'valid' : 'not-valid'}`
    }
    return styles;
  }

  render() {
    return (
      <FormContainer className={this.getValid()}>
      {!this.state.submitted ? 
        <div>
          <SubscribeForm pad='none' onSubmit={this.handleSubmit}>
            <InputField type='email' onDOMChange={this.validateEmail} ref='email' placeHolder={this.state.placeholder} />
            <br />
            <SplashButton label={this.props.buttonValue} type='submit' onClick={this.handleSubmit}/>
          </SubscribeForm>
          {this.state.showError ?
            <div>
              {!this.state.valid && this.state.isTyping ? 
                <div className='error'>{this.state.helpText}</div>
                : null}
            </div>
          : null}
        </div>
      : <StyledText>{this.state.completeMessage}</StyledText>}
      </FormContainer>
    );
  }
}

MailchimpForm.PropTypes = {
  action: string.isRequired
}
