import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { featureReducer } from './reducers/featureReducer'

//css
import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(featureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
