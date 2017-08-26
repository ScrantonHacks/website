import React from 'react';
import MailchimpForm from '../MailchimpForm';

export default (props) => {

  // need date from graphQL as well as 
  return (
    <div className='text-center text-white'>
      <h3>Scranton Hacks 2017</h3> 
      <p>University of Scranton</p>
      <MailchimpForm action="scrantonhacks.us16.list-manage.com/subscribe/post?u=5d0b0c770c04055d190170b52&amp;id=27660098a2" />
    </div>
  );
};

