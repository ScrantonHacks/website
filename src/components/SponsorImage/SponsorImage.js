import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'grommet/components/Image';


const SponsorImage = ({logo, tier}) => {
  console.log(logo);
  if(tier === 3) {
    return <Image src={logo} size="small" />;
  }
  else if (tier === 2) {
    return <Image src={logo} size="medium" />;
  }
  else if (tier === 1) {
    return <Image src={logo} size="large" />;
  }
}

SponsorImage.propTypes = {
  image: PropTypes.string,
  tier: PropTypes.number,
}

SponsorImage.defaultProps = {
  image: '',
  tier: 3,
}

export default SponsorImage;

  



