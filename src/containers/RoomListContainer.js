import React, {Component} from 'react';
import {connect} from 'react-redux';

import RoomList from '../components/RoomList';
import withAuth from '../hocs/withAuth';
import {resetRoomsPagination, fetchNextRooms, fetchPrevRooms} from '../actions/room';
import {Link} from 'react-router-dom';

export default withAuth(connect(
  ({roomListPagination: rlp}) => ({
    loading: rlp.loading,
    rooms: rlp.currentRooms.map(room => {
      return {
        ...room,
        itemProps: {
          as: Link,
          to: `/room/${room.id}`
        }
      }
    }),
    hasNext: rlp.nextRoomId != null,
    hasPrev: rlp.prevRoomIds.length > 0
  }),
  dispatch => ({
    onMount: () => {
      dispatch(resetRoomsPagination());
      dispatch(fetchNextRooms());
    },
    onNextClick: () => {
      dispatch(fetchNextRooms());
    },
    onPrevClick: () => {
      dispatch(fetchPrevRooms());
    }
  })
)(RoomList));
