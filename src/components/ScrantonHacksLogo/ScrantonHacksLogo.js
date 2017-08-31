import React from 'react';

import Image from 'grommet/components/Image';
import styled from 'styled-components'

import ScrantonHacksLogo 
from '../../pictures/ScrantonHacks_official_logo.svg';

import Anime from 'react-anime';

const Logo = styled.img`
  padding-top: 40px;
  padding-bottom: 30px;
`;

export default (props) => {
  return (
    <Anime scale={[.2, .5]} easing='easeInOutExpo' duration={5000}>
      <img src={ScrantonHacksLogo} />
    </Anime>
  );
};