import React from 'react';
import Box from 'grommet/components/Box';
import Parallax from 'react-springy-parallax';
import styled from 'styled-components';

const getBackgrounds = (backgrounds, offset) => {
  let key = 0;
  return backgrounds.map((background) => {
    key += 1;
    if(background.color !== 'undefined') {
      return (
        <Parallax.Layer 
          style={{backgroundColor: background.color}}
          key={key}
          offset={offset}
        />
      );
    }
    return (
      <Parallax.Layer key={key} offset={offset}>
        {background}
      </Parallax.Layer>
    );
  })
}

export default ({children, backgrounds, offset}) =>
    <Parallax.Layer offset={offset} speed={0.5}>
      {getBackgrounds(backgrounds, offset)}
      <Box full responsive size='full' textAlign='center'>
        {children}
      </Box>
    </Parallax.Layer> ;
