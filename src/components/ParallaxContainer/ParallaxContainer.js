import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Parallax from 'react-springy-parallax';
import styled from 'styled-components';

/* backgrounds go in order you want the depth to be
 * so if you want a color in front of a video,
 * you pass the video first, and then the color to use
 */
const ParallaxBox = styled(Box)`
  padding-bottom: 3em !important;
`;

class ParallaxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      backgrounds: props.backgrounds,
      offset: props.offset,
      factor: props.factor,
      name: props.name,
    };
  }

  getBackgrounds() {
    let key = 0;
    return this.state.backgrounds.map((background) => {
      key += 1;
      if(typeof background.color !== 'undefined') {
        return (
          <Parallax.Layer 
            style={{backgroundColor: background.color}}
            key={key}
            offset={this.state.offset}
            factor={this.state.factor}
          />
        );
      }
      return (
        <Parallax.Layer offset={this.state.offset} key={key} factor={this.state.factor}>
          {background}
        </Parallax.Layer>
      );
    });
  }

  render() {
    return (
      <div name={this.state.name}>
        {this.getBackgrounds()}
        <Parallax.Layer offset={this.state.offset} speed={0.5} factor={this.state.factor} >
          <ParallaxBox 
            responsive 
            full 
            textAlign='center' 
            pad='none' 
            flex 
            margin='none' 
            justify='start' 
            align='center'
          >
            {this.state.children}
          </ParallaxBox>
        </Parallax.Layer>
      </div>
    );
  }
}

export default ParallaxContainer;
