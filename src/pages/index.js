import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import ScrantonFlyoverVideo from '../videos/scranton-flyover.mp4';

import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import MailchimpForm from '../components/MailchimpForm';

export default class Index extends Component {
  render() {
    return (
    <Box direction='column' margin='none' pad='none'>
      	<HackHero chapter={0}>
          <BackgroundParallaxVideo 
            videoSource = {ScrantonFlyoverVideo}
            startTime = {12}
          >
            <div>
              <h1>ScrantonHacks</h1>
              <MailchimpForm className="subscribe-form"/>
            </div>
          </BackgroundParallaxVideo>
      	</HackHero>
      </Box>
    )
  }
}
