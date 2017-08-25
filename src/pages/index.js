import React, { Component } from 'react';
import Box from 'grommet/components/Box';

import ScrantonFlyoverVideo from '../videos/scranton-flyover.mp4';

import HackHero from '../components/HackHero';
import BackgroundParallaxVideo from '../components/BackgroundParallaxVideo';
import SubscribeSplash from '../components/SubscribeSplash';
import SponsorCrumb from '../templates/SponsorCrumb';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS");
    console.log(this.props);
    return (
    <Box direction='column' margin='none' pad='none'>
      	<HackHero chapter={0}>
          <BackgroundParallaxVideo 
            videoSource = {ScrantonFlyoverVideo}
            startTime = {12}
          >
            <div className="text-center">
              <SubscribeSplash />
              <SponsorCrumb/>
            </div>
          </BackgroundParallaxVideo>
      	</HackHero>
      </Box>
    )
  }
}

/*

  leave this out for now
        <HackHero chapter={1} title={[
          "echo '#! /bin/ScrantonHacks' > about.sh",
          "About Us"]}>
        </HackHero>
*/