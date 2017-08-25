import React from 'react';
import SocialShare from '../../templates/SocialShare';

export default ({ data }) => {
  console.log(data);
  return ( 
    <div className='text-center text-white'>
      <p>Looking to sponsor us?</p>
      <p>Email us at sponsorships@scrantonhacks.com</p>
      <SocialShare />
    </div>
  );
};

export const query = graphql`
  query SponsorQuery {
    site {
      siteMetadata {
        sponsorEmail
      }
    }
  }
`;
