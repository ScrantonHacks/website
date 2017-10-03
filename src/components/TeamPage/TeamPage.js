import React, { Component } from 'react';

const Canvas = styled.canvas`
    height: 100%;
    width: 100%;
`;

export default class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapter: props.chapter,
            gradientBg: props.gradientBg,
            style: props.style,
            offset: props.offset,
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
				>
					<TypedTitle strings={this.props.title} />
					{this.props.children}
				</ParallaxContainer>
			);
		}
		return(
			<div>
				{this.getTitle()}
				{this.props.children}
			</div>
		);
	}
}
