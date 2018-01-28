import React, {Component} from 'react';
import styled from 'styled-components';
import {
  Button,
  Icon,
  Grid,
  Segment,
  Header,
  Dimmer,
  Loader,
  Modal,
} from 'semantic-ui-react';

const Wrap = styled.div`
  height: 100%;
`;

const Margin = styled.div`
  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export default class LoginScreen extends Component {
  render() {
    const {
      loading,
      errorModalOpen,
      onErrorModalClose,
      onGoogleLogin,
      onTwitterLogin
    } = this.props;
    return (
      <Wrap>
        <Modal open={errorModalOpen} size="mini" onClose={onErrorModalClose}>
          <Modal.Header>
            로그인 중 에러가 발생했습니다.
          </Modal.Header>
          <Modal.Content>
            <p>다시 시도해 보세요.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative icon='check' content='닫기' onClick={onErrorModalClose} />
          </Modal.Actions>
        </Modal>
        <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle" centered>
          <Grid.Column style={{maxWidth: 300}}>
            <Dimmer active={loading} inverted>
              <Loader />
            </Dimmer>
            <Header as="h1" icon textAlign="center">
              <Icon name="send" color="teal" />
              <Header.Content>
                Chat!
              </Header.Content>
            </Header>
            <Segment stacked>
              <Margin>
                <Button fluid color="google plus" onClick={onGoogleLogin}>
                  <Icon name="google plus" /> 구글로 로그인
                </Button>
              </Margin>
              <Margin>
                <Button fluid color="twitter" onClick={onTwitterLogin}>
                  <Icon name="twitter" /> 트위터로 로그인
                </Button>
              </Margin>
            </Segment>
          </Grid.Column>
        </Grid>
      </Wrap>
    );
  }
}
