import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Article from 'grommet/components/Article';
import TypedTitle from '../TypedTitle';

/* Props
 * @chapter { integer }
 * @title { array[strings] }
 */
export default class HackHero extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getTitle() {
		if(typeof this.props.title !== 'undefined' && this.props.title !== null) {
			return (<TypedTitle strings={this.props.title} />);
		}
	};

	render() {
		return (
			<Article 
				scrollStep
				selected = {this.props.chapter}
			>
				{this.getTitle()}
				{this.props.children}
			</Article>
		);
	}
}
