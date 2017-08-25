import React from 'react';
import FontAwesome from 'react-fontawesome';

// TODO
export default ({ data }) => {
  // data keeps returning undefined here
  if ( typeof data === 'undefined') {
    return <div />;
  }
  const social = data.site.siteMetadata.social;
  return (
  <span>
    <a href="{social.facebook_link}" className="margin-right-1em">
      <FontAwesome 
          name='facebook'
          size='2x' 
      />
    </a>
    <a href="{social.instagram_link}" className="margin-right-1em">
      <FontAwesome
        name="instagram"
        size="2x"
      /> 
    </a>
    <a href="{social.twitter_link}" className="margin-right-1em">
      <FontAwesome
        name="twitter"
        size="2x"
      />
    </a>
  </span>
  );
}

export const query = graphql`
  query ShareQuery {
    site {
      siteMetadata {
        social {
          facebook_link
          twitter_link
          instagram_link
        }
      }
    }
  }
`
