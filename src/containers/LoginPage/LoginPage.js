import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as fbActions from '../../actions/fbActions'

export class LoginPage extends Component {
  state = {
    pluginsIsLoad: false
    }

  componentDidMount() {

    this.props.actions.initFB()
    .then(() => FB.getLoginStatus((response) => { //Pushing button events
      FB.Event.subscribe('auth.login', (response) => {
        checkStatus(response)
      })
      FB.Event.subscribe('auth.logout', (response) => { //Pushing button events
        checkStatus(response)
      })
      FB.Event.subscribe('xfbml.render', () => {//eslint-disable-line no-unused-vars
        this.setState({
          pluginsIsLoad: true
        })
      })
      const checkStatus = (response) => {
        if (response.status === 'connected') {
          const token = response.authResponse.accessToken
          this.props.actions.facebookInit()
          this.props.actions.logedInFB()
          this.props.actions.setToken(token)


        } else {
          this.props.actions.notLogedInFB() //user did not authorize
        }
      }
      checkStatus(response)
    }))
  }

  checkLoginState() { //For initializing login button
    FB.getLoginStatus((response) => {/*global FB*/
      this.statusChangeCallback(response);
      this.setState({
        token: response.authResponse.accessToken
      })
    });
  }

  render() {
    const isLodaded = this.state.pluginsIsLoad


    return (
      <nav className='navbar navbar-default'>
        {isLodaded
          ?
          null
          :
            <div className='btn btn-sm btn-primary' style={{fontFamile: 'lucida grande',
                                                            fontSize: '13px',
                                                            fontWeight: 'bold',
                                                            backgroundColor: '#3e59a5',
                                                            height: '25px',
                                                            maxWidth: '85px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent:'space-around',
                                                            padding: '0 6px'
                                                          }}>
              <div><i className='fa fa-spinner fa-spin'></i></div>
              <div>Loading</div>
            </div>
        }

          <div className='fb-login-button' data-size='large'
              data-auto-logout-link='true'
              data-onlogin='this.checkLoginState'
              data-scope='public_profile,user_photos,email,publish_actions'
              >
          </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    facebook: state.facebook,
    token: state.token
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fbActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
