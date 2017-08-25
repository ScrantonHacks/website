import React from 'react';
import FontAwesome from 'react-fontawesome';
// TODO
export default (props) => {
  return (
  <span>
    <a href="gatsbydata" className="margin-right-1em">
      <FontAwesome 
          name='facebook'
          size='2x' 
      />
    </a>
    <a href="gatsbydata" className="margin-right-1em">
      <FontAwesome
        name="instagram"
        size="2x"
      /> 
    </a>
    <a href="gatsbydata" className="margin-right-1em">
      <FontAwesome
        name="twitter"
        size="2x"
      />
    </a>
  </span>
  );
}