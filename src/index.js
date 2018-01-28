import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import LoginScreenContainer from './containers/LoginScreenContainer';
import RoomListPage from './containers/RoomListPage';

const store = configureStore();

const config = {
  apiKey: "AIzaSyAcfI3sqjRquymEwkDCMYFGBpW1sYfw4fU",
  authDomain: "fds-chat.firebaseapp.com",
  databaseURL: "https://fds-chat.firebaseio.com",
  projectId: "fds-chat",
  storageBucket: "",
  messagingSenderId: "966999031060"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/room-list" />} />
        <Route path="/login" component={LoginScreenContainer} />
        <Route path="/room-list" component={RoomListPage} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
