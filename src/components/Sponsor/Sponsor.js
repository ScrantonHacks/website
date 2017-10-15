import React, {Component} from 'react';
import Image from 'grommet/components/Image';

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            name: props.name,
        };
    }

    render() {
        return (
            <Image size={this.state.size}
                   name={this.state.name} />
        );
    }
}
