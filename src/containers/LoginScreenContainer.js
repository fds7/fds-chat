import React, {Component} from 'react';

import LoginScreen from '../components/LoginScreen';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends Component {
  state = {
    success: false,
    loading: false,
    errorModalOpen: false
  }
  handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      this.setState({
        success: true
      });
    } catch (e) {
      console.error(e);
      this.setState({
        loading: false,
        errorModalOpen: true
      });
    }
  }

  handleErrorModalClose = () => {
    this.setState({
      errorModalOpen: false
    });
  }
  render() {
    const {
      success,
      loading,
      errorModalOpen,
    } = this.state;

    if (success) {
      return (
        <Redirect to="/room-list" />
      );
    } else {
      return (
        <LoginScreen
          loading={loading}
          errorModalOpen={errorModalOpen}
          onErrorModalClose={this.handleErrorModalClose}
          onGoogleLogin={this.handleGoogleLogin}
          onTwitterLogin={() => alert('준비중입니다.')}
        />
      );
    }
  }
}
