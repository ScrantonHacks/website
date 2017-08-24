import React from 'react';
import MailchimpForm from '../MailchimpForm';
import ScrantonHacksLogo from '../ScrantonHacksLogo';

export default (props) => {

  // need date from graphQL as well as 
  return (
    <div className='text-center text-white'>
      <ScrantonHacksLogo />
      <h3>Scranton Hacks 2017</h3> 
      <p>University of Scranton</p>
      <MailchimpForm className='subscribe-form' />
    </div>
  );
};

