import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import { github } from '../reducers/github.js'
import DevTools from '../containers/DevTools.js'
import { persistState } from 'redux-devtools'
import { routes } from  '../routes.jsx'


const reducer = combineReducers({
  router: routerStateReducer,
  github: github
});


export default function makeStore (initialState) {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({routes, createHistory}),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(reducer, initialState);
  return store;

}

