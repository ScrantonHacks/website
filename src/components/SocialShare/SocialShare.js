import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesome from 'react-fontawesome';

const StyledLink = styled.a`
  margin-right: 1em;
`;

const getAllSocial = social => {
  let key = 0;
  return social.map( item =>  {
    key+=1;
    return (
    <StyledLink href={item.link} key={key}>
      <FontAwesome
        name={item.name}
        size={item.size}
        style={{color: '#fff'}}
      />
    </StyledLink>);
  });
}

const SocialShare = ({social}) => {
  return (
    <span>
      {getAllSocial(social)}
    </span>
  );
}

export default SocialShare;

SocialShare.propTypes = {
  social: PropTypes.array.isRequired,
}
