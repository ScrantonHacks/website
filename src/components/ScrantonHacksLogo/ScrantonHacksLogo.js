import React from 'react';
import ScrantonHacksLogo from '../../pictures/BaseLogo_white_around_s_and_h_TRIMMED_SMALL.png';

import Image from 'grommet/components/Image';
import styled from 'styled-components'

const Logo = styled(Image)`
  padding-top: 40px;
  padding-bottom: 30px;
`;

export default (props) => {
  return (
    <Logo 
      src={ScrantonHacksLogo} 
      size='large'
    />
  );
};