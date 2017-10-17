import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Granim from 'granim';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TypedTitle from '../TypedTitle';
import ParallaxContainer from '../ParallaxContainer';
import BackgroundParallaxVideo from '../BackgroundParallaxVideo';

import ScrantonFlyoverVideo from '../../videos/scranton-flyover.mp4';

/* Props
 * @chapter { integer }
 * @title { array[strings] }
 */

const Canvas = styled.canvas`
	height: 100%;
	width: 100%;
`;

export default class HackHero extends Component {
  static defaultProps = {
    factor: 1,
  }
	constructor(props) {
		super(props);
		this.state = {
			chapter: props.chapter,
			gradientBg: props.gradientBg,
			style: props.style,
      offset: props.offset,
      factor: props.factor,
      scrantonVideo: props.scrantonVideo,
      name: props.name,
		};
		this.granimSettings = {
			element: `#canvas-${props.offset}`,
			name: 'basic-gradient',
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states: {
				"default-state": {
            gradients: [
                ['#870053', '#61045F'],
                ['#017175', '#00CDAC'],
                ['#AC35C4', '#9733EE']
            ],
        },
			},
		};
	}

	componentDidMount() {
		if(this.state.gradientBg) {
			new Granim(this.granimSettings);
		}
	}

	getTitle() {
		if(typeof this.props.title !== 'undefined' && this.props.title !== null) {
			return (<TypedTitle strings={this.props.title} />);
		}
	};

	getGradientBg() {
		return (
			<div style={{ height: '100%', width: '100%'}}>
				<Canvas id={`canvas-${this.state.offset}`} />
			</div>
		);
	}

	render() {
		if(this.state.gradientBg) {
			return (
				<ParallaxContainer 
					backgrounds={Array(this.getGradientBg())} 
          offset={this.state.offset}
          factor={this.state.factor}
				>
					<TypedTitle strings={this.props.title} />
					{this.props.children}
				</ParallaxContainer>
			);
		}
		if (this.state.scrantonVideo) {
			return (
				<BackgroundParallaxVideo
					videoSource = {ScrantonFlyoverVideo}
					offset={0}
				>
					{this.getTitle()}
					{this.props.children}
				</BackgroundParallaxVideo>
			);
		}
		return(
      <ParallaxContainer 
        backgrounds={Array()} 
        offset={this.state.offset} 
        factor={this.state.factor}
        name={this.state.name}
      >
        {this.getTitle() ? this.getTitle() : ''}
				{this.props.children}
			</ParallaxContainer>
		);
	}
}
