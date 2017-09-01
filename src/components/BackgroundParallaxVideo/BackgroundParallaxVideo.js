import React, { Component } from 'react';
import Video from 'grommet/components/Video';
import ParallaxContainer from '../ParallaxContainer';

export default class BackgroundParallaxVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
    };
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.state.isPaused,
      isMuted: true,
    });
  }

  getBackground() {
    return (
      <Video align='top' autoPlay full loop muted fit='cover'
        showControls={false}
        style={{
          overflow: 'hidden'
        }}
      >
        <source src={this.props.videoSource} type='video/mp4' />
      </Video>
    );
  }
  
  render() {
    return (
      <ParallaxContainer background = {Array(this.getBackground())}>
        <Parallax bgStyle={{ backgroundColor: 'rgba(81,45,109,0.8)' }}>
          {this.props.children}
        </Parallax>
      </ParallaxContainer>
    );
  }
}