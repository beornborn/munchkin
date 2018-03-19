//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Redirect } from 'react-router'
import { Provider } from 'react-redux'

import Layout from 'components/layout/Layout'
import ArticleLayout from 'components/layout/Article'
import Landing from 'containers/pages/Landing'
import Article1 from 'components/pages/articles/Article-1'
import store from 'Store'
import 'assets/styles/global.css'

render(
  <Provider store={store}>
    <div style={{height: '100%'}}>
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='articles/' component={ArticleLayout}>
            <Route path='munchkin-and-kiev' component={Article1} />
          </Route>
        </Route>
        <Redirect from='/*' to='/' />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
