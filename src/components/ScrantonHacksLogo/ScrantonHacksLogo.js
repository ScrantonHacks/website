import React from 'react';

import Image from 'grommet/components/Image';
import styled from 'styled-components'

import ScrantonHacksLogo from '../../pictures/BaseLogo_white_around_s_and_h_TRIMMED_SMALL.png';
import Anime from 'react-anime';

const Logo = styled.img`
  padding-top: 40px;
  padding-bottom: 30px;
`;

export default (props) => {
  return (
    <Anime delay={(e, i) => i * 500} scale={[.2, .5]} easing='easeInOutSine' duration={5000}>
      <img src={ScrantonHacksLogo} style={{paddingTop: '40px', paddingBottom: '10px'}}/>
    </Anime>
  );
};