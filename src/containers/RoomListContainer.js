import React, {Component} from 'react';
import {connect} from 'react-redux';

import RoomList from '../components/RoomList';
import withAuth from '../hocs/withAuth';

/*
hasPrev
onPrevClick
hasNext
onNextClick
rooms
*/

/*
rooms 구조
roomId: 1,
title: 'Redux 스터디 모임',
createdAt: 1517118311910,
joined: true,
itemProps: {
  as: 'a',
  href: 'https://httpbin.org/ip'
}
*/

export default withAuth(connect(
  state => {
    return {
      rooms: [
        {
          roomId: 1,
          title: 'Redux 스터디 모임',
          createdAt: 1517118311910,
          joined: true,
        },
        {
          roomId: 2,
          title: 'TypeScript 스터디 모임',
          createdAt: 1517118311910
        },
      ]
    }
  }
)(RoomList));
