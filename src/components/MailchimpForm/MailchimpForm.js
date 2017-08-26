import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reqwest from 'reqwest';
import { isemail } from 'isemail';
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
      helpText: props.helpText
    }
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
    e.preventDefault();
    let isValid = this.state.valid;

    if (isValid) {
      reqwest({
        method: 'get',
        type: 'jsonp',
        contentType: 'application/json',
        url: this.state.mailChimpUrl,
        data: {EMAIL: this.state.emailAddress, STATUS: 'subscribed'},
        jsonpCallback: 'c'
      })
      .then(function (resp) {
        this.setState({
          submitted: true
        })
      })
      .fail(function (err, msg) {
        console.log(err)
        this.setState({
          submitted: true
        })
      })
      .always(function (resp) {
        this.setState({
          submitted: true
        })
      });
      this.setState({
        submitted: true
      });
    }
  }

  validateEmail(e) {
    this.setState({
      typing: true
    });

    if(isemail(e.currentTarget.value)) {
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
          <form onSubmit={this.handleSubmit}>
            <input type='email' onChange={this.validateEmail} ref='email' placeholder={this.state.placeholder} />
            <br />
            <SplashButton label={this.props.buttonValue} />
          </form>
          {this.state.showError ?
            <div>
              {!this.state.valid && this.state.isTyping ? 
                <div className='error'>{this.state.helpText}</div>
                : null}
            </div>
          : null}
        </div>
      : <p>{this.state.completeMessage}</p>}
      </FormContainer>
    );
  }
}

MailchimpForm.PropTypes = {
  action: string.isRequired
}
