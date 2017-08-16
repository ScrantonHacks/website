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
			<Layer align='center' flush={true} peek={true}>
				<Article 
					scrollStep={true}
					selected= {this.props.chapter}
				>
					{this.props.content}
				</Article>
			</Layer>
		);
	}
}
