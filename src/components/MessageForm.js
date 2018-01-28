import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
} from 'semantic-ui-react';

export default class MessageList extends Component {
  static defaultProps = {
    onMessageSubmit: () => {}
  }
  handleSubmit = (e, data) => {
    e.preventDefault();
    const {onMessageSubmit} = this.props;
    const messageEl = e.target.elements.message;
    onMessageSubmit(messageEl.value);
    messageEl.value = '';
  }
  render() {
    const {message} = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          // disabled={true}
          placeholder="메시지를 입력하세요..."
          name="message"
          autoComplete="off"
          action
        >
          <input />
          <Button type="submit" content="전송" positive />
        </Input>
      </Form>
    )
  }
}
