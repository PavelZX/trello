import {
  FETCH_BOARDS_BEGIN,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  CREATE_BOARD_SUCCESS
} from "../actions/boards";

const initialState = {
  loading: true,
  boards: [],
  errors: {}
};

const boards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARDS_BEGIN:
      return {
        ...state,
        loading: true,
        errors: {}
      };
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.payload.boards,
        loading: false
      };
    case FETCH_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors || {}
      };
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        boards: [...state.boards, action.payload.board],
        loading: false,
        errors: {}
      };
    default:
      return state;
  }
};

export default boards;
