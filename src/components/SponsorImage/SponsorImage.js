import React from 'react';
import PropTypes from 'prop-types';

import Image from 'grommet/components/Image';

const SponsorImage = ({image}, {tier}) => {
  if(tier === 3) {
    return <Image src={image} size="small" />
  }
  else if (tier === 2) {
    return <Image src={image} size="medium" />
  }
  else if (tier === 1) {
    return <Image src={image} size="large" />
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


  



