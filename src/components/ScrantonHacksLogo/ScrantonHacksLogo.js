import React from 'react';
import ScrantonHacksLogo from '../../pictures/BaseLogo_white_around_s_and_h.png';
// white letters with black outline on 'S' and 'H'

export default (props) => {
  return (
    <img src={ScrantonHacksLogo} style={{
      paddingTop: '40px',
      paddingBottom: '30px',
      width: '30%',
      height: '30%'
    }}></img>
    );
};