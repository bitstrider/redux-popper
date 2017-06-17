import {
    OPEN_POPPER,
    ASSIGN_POPPER,
    CLOSE_POPPER
} from './constants';

const defaultState = {};


export default (state = defaultState, action) => {
    // popperReducer.jsx
  const { type, payload: { id, data } } = action;
  const popperState = state[id];
  switch(type) {
    case OPEN_POPPER : {
      return { ...state, [id]:{ ...popperState, isOpen:true } };
    }

    case ASSIGN_POPPER : {
      return { ...state, [id]:{ ...popperState, data } };
    }

    case CLOSE_POPPER : {
      return { ...state, [id]:{ ...popperState, isOpen:false } }; //data is cleared
    }
  }
};
