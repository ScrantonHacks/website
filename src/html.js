import React from 'react';
import PropTypes from 'prop-types';

const BUILD_TIME = new Date().getTime(); // eslint-disable-line no-unused-vars

export default class HTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteMetadata: props.data.site.siteMetadata;
    };
  }

  static propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.node,
    postBodyComponents: PropTypes.node,
    data: PropTypes.object,
  }

  /* eslint-disable global-require, import/no-webpack-loader-syntax, react/no-danger */
  render() {
    let css
    if(process.env.NODE_ENV === 'production') {
      try {
        css = (
          <style
            dangerouslySetInnerHTML={{
              __html: require('!raw!../public/styles.css'),
            }}
          />
        )
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Scranton Hacks</title>
          <meta name="description" content="" />
          <link rel="canonical" href="http://scrantonhacks.com" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /> 
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
