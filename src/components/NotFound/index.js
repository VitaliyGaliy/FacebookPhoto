import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {

  render() {
      console.log('FB', window.FB);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
          </div>
        </div>
      </div>
    )
  }
}
