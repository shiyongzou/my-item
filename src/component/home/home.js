import React from 'react'
import { Carousel } from 'antd'
// import mirror, { actions, connect, render } from 'mirrorx'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Carousel
          effect='fade'
          autoplay
          dots
        >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>)
  }
}
export default Home
