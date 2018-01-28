import {
  RESET_ROOMS_PAGINATION,
  FETCH_NEXT_ROOMS_SUCCESS,
  FETCH_PREV_ROOMS_SUCCESS,
  FETCH_ROOMS_REQUEST,
} from '../actions/room';
import {
  ROOMS_PER_PAGE
} from '../constants';

const initialState = {
  loading: false,
  currentRoomId: null,
  nextRoomId: null,
  prevRoomIds: [],
  currentRooms: [],
}

export default function roomListPagination(state = initialState, action) {
  switch (action.type) {
    case RESET_ROOMS_PAGINATION:
      return initialState;
    case FETCH_ROOMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_NEXT_ROOMS_SUCCESS:
      return {
        loading: false,
        currentRoomId: action.rooms[0].id,
        nextRoomId: action.rooms[ROOMS_PER_PAGE + 1] || null,
        prevRoomIds: (
          state.currentRoomId
          ? [
            ...state.prevRoomIds,
            state.currentRoomId
          ]
          : []
        ),
        currentRooms: action.rooms
      };
    case FETCH_PREV_ROOMS_SUCCESS:
      return {
        loading: false,
        currentRoomId: state.prevRoomIds[state.prevRoomIds.length - 1],
        nextRoomId: state.currentRoomId,
        prevRoomIds: state.prevRoomIds.slice(0, state.prevRoomIds.length - 1),
        currentRooms: action.rooms
      };
    default:
      return state;
  }
}
