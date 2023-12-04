import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './store';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import App from './js/App';

/**
 * polyfill - @babel/preset-env; useBuiltIns: 'entry'
 * 
 * @see https://babeljs.io/docs/en/babel-preset-env
 */
import 'core-js';
import 'regenerator-runtime/runtime';
import { enableES5 } from 'immer';

/**
 * ERROR : "[Immer] minified error nr: 18 'ES5'."
 * @see https://immerjs.github.io/immer/installation/
 * 
 * you need to enable this feature once during the start of your application:
 */
enableES5();


// redux store
let middlewares = [ReduxThunk];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();