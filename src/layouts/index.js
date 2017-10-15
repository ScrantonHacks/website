import React from 'react'
import PropTypes from 'prop-types'

// Grommet
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
// Parallax
import Parallax from 'react-springy-parallax'

// Styles
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <App style={{maxWidth: '100%'}}>
        <Parallax ref='parallax' pages={4} scrolling={true}>
          {this.props.children()}
        </Parallax>
      </App>
    )
  }
}
