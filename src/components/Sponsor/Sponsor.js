import React from 'react';
import Image from 'grommet/components/Image';

export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state {
        };
    }

    render() {
        return (
            <Image src={props.icon}
                   size={props.size}
                   caption="true"
                   alt={props.name} />
        );
    }
}
