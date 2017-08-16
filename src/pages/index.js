import React, { Component } from 'react'
import HackHero from '../components/HackHero'

export default class Index extends Component {
  render() {
    return (
      <div>
      	<HackHero chapter={0} content="Hello"/>
      	<HackHero chapter={1} content="Hello Again"/>
      	<HackHero chapter={2} content="Hello another time"/>
      </div>
    )
  }
}
