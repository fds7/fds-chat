import React, {Component} from 'react';
import {
  Modal,
  Button,
  Header,
  Icon,
  Form,
  Dimmer,
  Message,
} from 'semantic-ui-react';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader/Loader';

export default class NewRoomModal extends Component {
  static defaultProps = {
    open: false,
    loading: false,
    errorMessage: '',
    onCreate: () => {},
    onCancel: () => {},
  }
  state = {
    title: ''
  }

  handleNewRoomClick = () => {
    const {onCreate} = this.props;
    onCreate(this.state.title);
  }

  handleChange = (e, data) => {
    this.setState({
      title: data.value
    });
  }

  render() {
    const {open, onCancel, loading, errorMessage} = this.props;
    const {title} = this.state;
    return (
      <Modal
        trigger={<Button color="teal">새 채팅방</Button>}
        size="small"
        open={open}
      >
        <Dimmer active={loading} inverted>
          <Loader />
        </Dimmer>
        <Header icon="send" content="새 채팅방" />
        <Modal.Content>
          <Form as="div">
            <Form.Input
              name="title"
              value={title}
              onChange={this.handleChange}
              label="채팅방 이름"
              type="text"
            />
          </Form>
          {
            errorMessage && (
              <Message color="red">{errorMessage}</Message>
            )
          }
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={onCancel}>
            <Icon name="cancel" /> 취소
          </Button>
          <Button positive onClick={this.handleNewRoomClick}>
            <Icon name="plus" /> 만들기
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
