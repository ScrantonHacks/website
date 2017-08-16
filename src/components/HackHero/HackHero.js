import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Article from 'grommet/components/Article';

export default class HackHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Article 
				scrollStep
				selected = {this.props.chapter}
			>
				{this.props.content}
			</Article>
		);
	}
}
