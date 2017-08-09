import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Albums from './components/Albums/Albums'
import Album from './components/Album/Album'
import NotFound from './components/NotFound'
import Facebook from './components/FacebookMain'
import requireAuthentication from './containers/AuthenticatedComponent'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Facebook} />
      <Route path='/albums' component={requireAuthentication(Albums)} />
      <Route path='/album/:_id' component={requireAuthentication(Album)} />
      <Route path='*' component={NotFound} />
    </Route>


  </div>
)
