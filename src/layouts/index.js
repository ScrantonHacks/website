import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import Parallax from 'react-springy-parallax';

import '../scss/main.scss';

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet title="ScrantonHacks"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" /> {/* this is valid react-helmet usage! */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /> 
        </Helmet>
        <App style={{maxWidth: '100%'}}>
          <Parallax ref='parallax' pages={5}>
            {this.props.children()}
          </Parallax>
        </App>
      </div>
    );
  }
}
