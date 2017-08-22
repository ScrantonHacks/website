import React, { Component } from 'react';
import VideoPlayer from 'react-background-video-player';
import { Parallax, Background } from 'react-parallax';
export default class BackgroundParallaxVideo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.state.isPaused,
      isMuted: true,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  handleOnPlay = () => {
    this.setState({isPlaying: true});
  }


  render() {
    return (
      <div>
        <Parallax strength={300}>
          <Background>
            <VideoPlayer 
              playsInline
              containerWidth = {this.state.windowWidth}
              containerHeight = {this.state.windowHeight}
              src = {this.props.videoSource}
              volume = {0}
              startTime = {this.props.startTime}
              muted
              loop
              autoPlay
              zIndex = {0}
            />
          </Background>
          <div className = 'transparent-scranton-bg' />
        </Parallax>
      </div>
    );
  }
}