import React, { Component } from 'react'
import LoginPage from '../LoginPage/LoginPage'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <LoginPage />
        {this.props.children}
      </div>
    )
  }
}
