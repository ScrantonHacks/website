import React, { Component } from 'react';
import HackHero from '../components/HackHero';
import Box from 'grommet/components/Box';

export default class Index extends Component {
  render() {
    return (
    <Box direction='column' margin='none' pad='none'>
      	<HackHero chapter={0} content="Put somethingAbout"/>
      	<HackHero chapter={1} content="Hello Again"/>
      	<HackHero chapter={2} content="Hello another time"/>
      </Box>
    )
  }
}
