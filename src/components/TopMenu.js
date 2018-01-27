import React, {Component} from 'react';
import {Menu, Icon, Container} from 'semantic-ui-react';

export default class TopMenu extends Component {
  render() {
    const {logoItemProps = {}, accountItemProps = {}} = this.props;
    return (
      <Menu fixed="top">
        <Menu.Item header {...logoItemProps}>
          <Icon name="send" color="teal" size="large" />
          Chat!
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item {...accountItemProps}>계정</Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
