import React, {Component} from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';

const MarginalDiv = styled.div`
  margin-top: 20px;
`;

export default class AccountScreen extends Component {
  render() {
    const {
      photoEl,
      nickNameEl,
      logoutButtonEl
    } = this.props;
    return (
      <Container>
        <Header as="h2">계정 설정</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              {photoEl}
            </Grid.Column>
            <Grid.Column width={10}>
              {nickNameEl}
              <MarginalDiv>
                {logoutButtonEl}
              </MarginalDiv>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
