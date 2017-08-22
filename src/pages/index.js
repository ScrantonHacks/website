import React, { Component } from 'react';
import Box from 'grommet/components/Box';


import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';

export default class Index extends Component {
  render() {
    return (
    <Box direction='column' margin='none' pad='none'>
      	<HackHero chapter={0}>
          <BackgroundParallaxVideo 
            videoSource = 'https://player.vimeo.com/play/814418802?s=230544156_1503374127_d0b43cfef018b25e103c16be10135052&loc=external&context=Vimeo%5CController%5CClipController.main&download=1'
            startTime = {10}
          />
      	</HackHero>
      </Box>
    )
  }
}
