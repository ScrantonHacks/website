import React, {Component} from 'react';
import Avatar from 'react-avatar';

export default ({source}, {size}, {name}) => {
            console.log({source});
            console.log({size});
            console.log({name});
            return (<Avatar src={source}
                   size={size}
                   name={name} />);
}
