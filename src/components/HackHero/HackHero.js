import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Hero from 'grommet/components/Article';

import Granim from 'granim';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';

import TypedTitle from '../TypedTitle';


/* Props
 * @chapter { integer }
 * @title { array[strings] }
 */

const HeroHidden = styled(Hero)`
	overflow: hidden !important;
`;

const Canvas = styled.canvas`
	position: relative;
	z-index: 0;
	width: 100%;
`;

export default class HackHero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chapter: props.chapter,
			gradientBg: props.gradientBg,
			windowWidth: 0,
			windowHeight: 0,
		};
		this.granimSettings = {
			element: `#canvas-${props.chapter}`,
			name: 'basic-gradient',
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states: {
				"default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ],
        },
			},
		};
	}

	componentDidMount() {
		if(this.state.gradientBg) {
			console.log(`Granim chapter: ${this.state.chapter}`);
			new Granim(this.granimSettings);
		}
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
		if(typeof window !== 'undefined') {
			this.setState({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
			});
		}
	};

	getTitle() {
		if(typeof this.props.title !== 'undefined' && this.props.title !== null) {
			return (<TypedTitle strings={this.props.title} />);
		}
	};

	render() {
		return (
			<div>
				{this.state.gradientBg ? 
					<HeroHidden scrollStep selected = {this.state.chapter} >
						<Parallax strength={1}>
							<Background>
								<Canvas 
									id={`canvas-${this.state.chapter}`} 
									style={{
										width: this.state.windowWidth,
										height: this.state.windowHeight
									}}
								/>
							</Background> 
							{this.getTitle()}
							<div style={{height: this.state.windowWidth, width: '500px'}} />
							{this.props.children}
						</Parallax> 
					</HeroHidden>
					:
					<HeroHidden scrollStep selected = {this.state.chapter} >
						{this.getTitle()}
						{this.props.children}
					</HeroHidden>
				}
			</div>
		);
	}
}
