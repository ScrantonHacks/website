import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Granim from 'granim';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

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
	constructor(props) {
		super(props);
		this.state = {
			chapter: props.chapter,
			gradientBg: props.gradientBg,
			style: props.style,
			offset: props.offset,
			scrantonVideo: props.scrantonVideo,
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

	render() {
		if(this.state.gradientBg) {
			return (
				<ParallaxContainer 
					backgrounds={Array(<Canvas id={`canvas-${this.state.offset}`} />)} 
					offset={this.state.offset}
				>
					{this.getTitle()}
					{this.props.children}
				</ParallaxContainer>
			);
		}
		return (
			<Box full responsive size='full' textAlign='center'>
				{this.state.scrantonVideo ? 
          <BackgroundParallaxVideo 
            videoSource = {ScrantonFlyoverVideo}
            startTime = {12}
          >
						{this.getTitle()}
						{this.props.children}
					</BackgroundParallaxVideo>
				 : 
				 <div>
				 	{this.getTitle()}
				 	{this.props.children}
				 </div>
				}
			</Box>
		);
	}
}
