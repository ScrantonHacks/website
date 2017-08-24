import React from 'react';
import ScrantonHacksLogo from '../../pictures/BaseLogo_transparent_bg_white_letters_black_outline.png';
// white letters with black outline on 'S' and 'H'

export default (props) => {
  return (
    <img src={ScrantonHacksLogo} style={{
      paddingTop: '30px',
      paddingBottom: '20px',
      width: '35%',
      height: '35%'
    }}></img>
    );
};