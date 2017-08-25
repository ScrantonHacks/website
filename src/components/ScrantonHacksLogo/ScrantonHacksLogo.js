import React from 'react';
import ScrantonHacksLogo from '../../pictures/BaseLogo_white_around_s_and_h.png';

import Image from 'grommet/components/Image';
// white letters with black outline on 'S' and 'H'

export default (props) => {
  return (
    <Image 
    src={ScrantonHacksLogo} 
    size='large'
    style={{
      paddingTop: '40px',
      paddingBottom: '30px',
      }}
    />
    );
};