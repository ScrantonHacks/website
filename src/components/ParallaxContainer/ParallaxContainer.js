import React from 'react';
import Box from 'grommet/components/Box';
import Parallax from 'react-springy-parallax';
import styled from 'styled-components';

/* bakgrounds go in order you want the depth to be
 * so if you want a color in front of a video,
 * you pass the video first, and then the color to use
 */

const getBackgrounds = (backgrounds, offset) => {
  let key = 0;
  return backgrounds.map((background) => {
    console.log("OFFSET: " + offset);
    key += 1;
    if(typeof background.color !== 'undefined') {
      return (
        <Parallax.Layer 
          style={{backgroundColor: background.color}}
          key={key}
          offset={offset}
        />
      );
    }
    return (
      <Parallax.Layer offset={offset} key={key}>
        {background}
      </Parallax.Layer>
    );
  })
}

export default ({children, backgrounds, offset}) =>
  <div>
    {getBackgrounds(backgrounds, offset)}
    <Parallax.Layer offset={offset} speed={0.5}>
      <Box full responsive size='full' textAlign='center'>
        {children}
      </Box>
    </Parallax.Layer>
  </div>;
