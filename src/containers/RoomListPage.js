import React from 'react';
import styled from 'styled-components';
import {
  Header,
} from 'semantic-ui-react';
import TopMenuContainer from './TopMenuContainer';
import RoomListContainer from './RoomListContainer';
import NewRoomModalContainer from './NewRoomModalContainer';

export default () => (
  <React.Fragment>
    <div>
      <TopMenuContainer />
      <Header as="h2">채팅방 목록</Header>
      <NewRoomModalContainer />
      <RoomListContainer />
    </div>

  </React.Fragment>
);
