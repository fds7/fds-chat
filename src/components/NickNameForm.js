import React, {Component} from 'react';
import {
  Form,
} from 'semantic-ui-react';

export default class NickNameForm extends Component {
  render() {
    const {
      loading,
      onNickNameChange,
      nickName,
    } = this.props;
    return (
      <Form as="div">
        <Form.Input
          label="별명"
          type="text"
          defaultValue={nickName}
          loading={loading}
          onChange={onNickNameChange}
        />
      </Form>
    )
  }
}
