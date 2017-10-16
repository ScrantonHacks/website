import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default ({ data }) => {
  const social = data.social;
  return (
    <span>
      <a href={social.facebook_link} className='margin-right-1em'>
        <FontAwesome 
            name='facebook'
            size='2x' 
        />
      </a>
      <a href={social.instagram_link} className='margin-right-1em'>
        <FontAwesome
          name='instagram'
          size='2x'
        /> 
      </a>
      <a href={social.twitter_link} className='margin-right-1em'>
        <FontAwesome
          name='twitter'
          size='2x'
        />
      </a>
    </span>
  );
}
