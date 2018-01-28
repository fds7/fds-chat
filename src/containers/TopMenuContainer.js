import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import TopMenu from '../components/TopMenu';

export default class TopMenuContainer extends Component {
  render() {
    return (
      <TopMenu
        logoItemProps={{
          as: Link,
          to: '/room-list'
        }}
        accountItemProps={{
          as: Link,
          to: '/account'
        }}
      />
    )
  }
}
