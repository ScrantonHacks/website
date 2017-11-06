import React from 'react';

import Image from 'grommet/components/Image';
import styled from 'styled-components'

import ScrantonHacksLogo 
from '../../pictures/scranton_hacks_logo.png';

import Anime from 'react-anime';


const Logo = styled.img`
  padding-top: 15px;
  width: 17em;
  height: 17em;
  opacity: .5;
`;

export default (props) => {
  return (
    <Anime scale={[.1, .5]}>
      <Logo src={ScrantonHacksLogo} />
    </Anime>
  );
};
