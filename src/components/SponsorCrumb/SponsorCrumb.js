import React, { Component } from 'react';
import Button from 'grommet/components/Button';

import SocialShare from '../SocialShare';


const onSponsorClick = function(e) {
  e.preventDefault();
};

export default ({ data }) =>
  <div className='text-center text-white'>
    <h3 style={{marginTop: '2em'}}>Want to sponsor us?</h3>
    <Button 
      onClick={onSponsorClick}
      fill 
      label='Sponsor' 
      primary 
      style={{width: '20.5em'}}
    ></Button>
    <p>Or email us at {data.site.siteMetadata.sponsorEmail}</p>
    <SocialShare data={data} />
  </div>
;
