import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-image';
import Spinner from 'grommet/components/icons/Spinning';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';


const getImageWidth = (tier) => {
  if(tier === 3) return '6em'; //small
  else if (tier === 2 ) return '10em'; //medium
  else return '20em'; //large
}

// small: height: 4, width: 11
// medium: height: 6, width: 19
//
const StyledImage = styled(Image)`
  height: auto;
  width: ${props => props.width};
  margin: auto;
  margin-bottom: 1em;
  padding: 0;
`;

const SponsorImage = ({logo, tier}) =>
  <VisibilitySensor>
    <StyledImage 
      src={logo} 
      loader={<Spinner />} 
      width={getImageWidth(tier)}
    />
  </VisibilitySensor>

SponsorImage.propTypes = {
  image: PropTypes.string.isRequired,
  tier: PropTypes.number,
}

SponsorImage.defaultProps = {
  image: '',
  tier: 3,
}

export default SponsorImage;

  



