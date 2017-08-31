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
      windowWidth: 0,
      windowHeight: 0,
    };
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.state.isPaused,
      isMuted: true,
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillMount() {
    if(typeof window !== 'undefined') {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize = () => {
    if (typeof window !== 'undefined') {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }
  };

  render() {
    return (
      <div>
        <Parallax strength={0}>
          <Background>
            <div style={{
              width: this.state.windowWidth,
              height: this.state.windowHeight
              }} />
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
            />
          </Background>
          <div style={{
            width: this.state.windowWidth,
            height: this.state.windowHeight
            }} className="transparent-scranton-bg">
            {this.props.children}
          </div>
        </Parallax>
      </div>
    );
  }
}