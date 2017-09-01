import React from 'react';
import Box from 'grommet/components/Box';
import Parallax from 'react-springy-parallax';
import styled from 'styled-components';

const getBackgrounds = (backgrounds, offset) => {
  let key = 0;
  return backgrounds.map((background) => {
    key += 1;
    return (
      <Parallax.Layer key={key} offset={offset}>
        {background}
      </Parallax.Layer>
    );
  })
}

export default ({children, backgrounds, offset}) =>
  <Box full responsive size='full' textAlign='center'>
    <Parallax.Layer offset={offset} speed={0.5}>
      {getBackgrounds(backgrounds, offset)}
      {children}
    </Parallax.Layer> 
  </Box>;
