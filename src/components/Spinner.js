import React, { Component } from 'react'
import loader from './../images/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="news loading" />
      </div>
    )
  }
}

export default Spinner
