import React from 'react';
import Avatar from 'react-avatar';

export default ({name}, {source}) =>
    <Avatar name={name} src={source} round='true'/>
