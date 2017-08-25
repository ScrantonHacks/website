import React, { Component } from 'react';
import SocialShare from '../SocialShare';

export default ({ data }) =>
  <div className='text-center text-white'>
    <p>Looking to sponsor us?</p>
    <p>Email us at {data.site.siteMetadata.sponsorEmail}</p>
    <SocialShare data={data} />
  </div>
;
