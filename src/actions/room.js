import * as firebase from 'firebase';

import {ROOMS_PER_PAGE} from '../constants';

export const RESET_ROOMS_PAGINATION = 'RESET_ROOMS_PAGINATION';
export const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
export const FETCH_NEXT_ROOMS_SUCCESS = 'FETCH_NEXT_ROOMS_SUCCESS';
export const FETCH_PREV_ROOMS_SUCCESS = 'FETCH_PREV_ROOMS_SUCCESS';

export function resetRoomsPagination() {
  return {
    type: RESET_ROOMS_PAGINATION
  };
}

export function fetchRoomsRequest() {
  return {
    type: FETCH_ROOMS_REQUEST
  };
}

export function fetchNextRoomsSuccess(rooms) {
  return {
    type: FETCH_NEXT_ROOMS_SUCCESS,
    rooms
  };
}

export function fetchPrevRoomsSuccess(rooms) {
  return {
    type: FETCH_PREV_ROOMS_SUCCESS,
    rooms
  };
}

async function fetchRoomsFrom(roomId) {
  let query = firebase.database()
    .ref('rooms')
    .orderByKey()
    .limitToLast(ROOMS_PER_PAGE + 1);
  if (roomId) {
    query = query.endAt(roomId);
  }
  const snapshot = await query.once('value');
  const rooms = Object.entries(snapshot.val()).map(([id, {title, createdAt}]) => ({
    id,
    title,
    createdAt,
  })).reverse();

  return rooms;
}

export const fetchNextRooms = () => async (dispatch, getState) => {
  dispatch(fetchRoomsRequest());
  const {
    roomListPagination: {
      nextRoomId
    }
  } = getState();
  const rooms = await fetchRoomsFrom(nextRoomId);
  dispatch(fetchNextRoomsSuccess(rooms));
}

export const fetchPrevRooms = () => async (dispatch, getState) => {
  dispatch(fetchRoomsRequest());
  const {
    roomListPagination: {
      prevRoomIds
    }
  } = getState();
  const prevRoomId = prevRoomIds[prevRoomIds.length - 1];
  const rooms = await fetchRoomsFrom(prevRoomId);
  dispatch(fetchPrevRoomsSuccess(rooms));
}
