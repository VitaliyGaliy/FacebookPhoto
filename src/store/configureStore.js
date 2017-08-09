import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { redirect } from '../middlewares/redirect'
import { rootReducer } from '../reducers'
import { LOG_FB } from '../constants/FB'


export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(redirect),
  )(createStore)(rootReducer)

  const isAuth = sessionStorage.getItem('isAuthenticated') ?
                JSON.parse(sessionStorage.getItem('isAuthenticated')) :
                 false
  if (isAuth) {
    store.dispatch({ type: LOG_FB
                  });
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
