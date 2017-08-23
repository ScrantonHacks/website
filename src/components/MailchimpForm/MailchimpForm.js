import React from 'react';
import SubscribeForm from 'react-mailchimp-subscribe';

/**
 * Edit action for susbscriber form here
 *
 */
const formProps = {
  action: '//scrantonhacks.us16.list-manage.com/subscribe/post?u=5d0b0c770c04055d190170b52&amp;id=27660098a2',
  messages: {
    inputPlaceholder: "Email",
    btnLabel: "Subscribe",
    sending: "Sending in progress...",
    success: "Thank You For Subscribing!",
    error: "Oops, was not able to subscribe"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}
 
const Form = (props) => <SubscribeForm {...formProps} className={props.className} />;

export default Form;
