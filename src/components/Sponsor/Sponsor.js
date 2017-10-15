import React from 'react';
import Avatar from 'react-avatar';

export default ({source_p}, {size_p}, {name_p}) =>
            <Avatar src={source_p}
                   size={size_p}
                   name={name_p} />;
