import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
  Dimmer,
  Loader
} from 'semantic-ui-react';
import {
  Redirect
} from 'react-router-dom';

export default WrappedComponent => class extends Component {
  componentWillMount() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      // 마운트 시 이미 사용자 정보를 가지고 있는 상태
      this.setState({
        user: currentUser
      });
    } else {
      // 마운트 시 사용자 정보가 없는 상태
      this.setState({
        user: null
      });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // 이전에 로그인 한 적이 있다면
          this.setState({
            user
          })
        } else {
          // 이전에 로그인 한 적이 없다면
          this.setState({
            user: false
          })
        }
      })
    }
  }

  render() {
    const {user} = this.state;
    if (user == null) {
      return (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      );
    } else if (user === false) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
