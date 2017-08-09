import { NOTLOG_FB, SET_TOKEN, INIT_FB, LOG_FB } from '../constants/FB'
//import { ROUTING } from '../constants/Routing'

export const initFB = () => dispatch => {//eslint-disable-line no-unused-vars

    let fbPromise = new Promise(resolve => {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1430883487025199';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      window.fbAsyncInit = () => {
        FB.init({
          appId      : '1748099085205484',
          cookie: true,
          oauth: true,
          status: true,
          xbfml: true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();/*global FB*/
        resolve();
      };
    })
    return fbPromise
  }

  export const logedInFB = () => (dispatch, getState) => {//eslint-disable-line no-unused-vars

    if (getState().facebook.isAuthenticated) {
      return Promise.resolve()
    }

    sessionStorage.setItem('isAuthenticated', 'true')

      dispatch({
        type: LOG_FB
      })

  }

  export const notLogedInFB = () => (dispatch) =>  {//eslint-disable-line no-unused-vars
    sessionStorage.setItem('isAuthenticated', 'false')

     dispatch({
        type: NOTLOG_FB
      })

  }

  export const setToken = t => (dispatch, getState) => {//eslint-disable-line no-unused-vars

    return dispatch({
        type: SET_TOKEN,
        payload: t
      })

  }

  export const facebookInit = () => (dispatch) => {//eslint-disable-line no-unused-vars

      dispatch({
        type: INIT_FB
      })
  }
