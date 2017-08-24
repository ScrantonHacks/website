import React from 'react';
import ScrantonHacksLogo from '../../pictures/BaseLogo_white_around_s_and_h.png';
// white letters with black outline on 'S' and 'H'

export default (props) => {
  return (
    <img src={ScrantonHacksLogo} style={{
      paddingTop: '30px',
      paddingBottom: '20px',
      width: '40%',
      height: '40%'
    }}></img>
    );
};