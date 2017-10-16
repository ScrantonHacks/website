import React from 'react';
import PropTypes from 'prop-types';

const BUILD_TIME = new Date().getTime(); // eslint-disable-line no-unused-vars

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
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
          {this.props.headComponents}                                                                                                              
          {css}
        </head>
        <body itemScope itemType="http://schema.org/WebPage">
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
