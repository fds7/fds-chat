import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Icon, Grid, Segment, Header, Dimmer, Loader} from 'semantic-ui-react';

const Margin = styled.div`
  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export default class LoginScreen extends Component {
  render() {
    const {loading, onGoogleLogin, onTwitterLogin} = this.props;
    return (
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
    );
  }
}
