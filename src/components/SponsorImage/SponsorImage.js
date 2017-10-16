import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-image';
import Spinner from 'grommet/components/icons/Spinning';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';


const getImageSize = (tier) => {
  if(tier === 3) return {width: '6em', height: 'auto'}; //small
  else if (tier === 2 ) return {width: '10em', height: 'auto'}; //medium
  else return {width: '30em', height: 'auto'}; //large
}
// small: height: 4, width: 11
// medium: height: 6, width: 19
//
const StyledImage = styled(Image)`
  height: ${props => props.height};
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
      height={getImageSize(tier).height} 
      width={getImageSize(tier).width}
    />
  </VisibilitySensor>

SponsorImage.propTypes = {
  image: PropTypes.string,
  tier: PropTypes.number,
}

SponsorImage.defaultProps = {
  image: '',
  tier: 3,
}

export default SponsorImage;

  



