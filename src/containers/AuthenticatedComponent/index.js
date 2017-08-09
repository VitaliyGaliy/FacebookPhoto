import React from 'react'
import { connect } from 'react-redux'
import { ROUTING } from '../../constants/Routing'

export default function requireAuthentication(Component) {

 class AuthenticatedComponent extends React.Component {
   state = {
     initFB: false
     }

    componentWillMount() {
       const isAuth = this.props.facebook.isAuthenticated;
       const isInit = this.props.facebook.initFB
       this.checkAuth(isAuth)
       this.checkInitFB(isInit)
    }

    componentWillReceiveProps(nextProps) {
      const isAuth = nextProps.facebook.isAuthenticated
      const isInit = nextProps.facebook.initFB
      this.checkAuth(isAuth)
      this.checkInitFB(isInit)
    }

    checkInitFB(isInit){
      if (isInit) {
        this.setState({
          initFB: isInit
        })
      }
    }

    checkAuth(isAuth) {
      if (!isAuth) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'push',
            nextUrl: '/'
          }
        })
      }
    }
    render() {

      return (
        <div>
          {this.state.initFB
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
    return {
      facebook: state.facebook
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
