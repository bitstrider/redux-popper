import {
    OPEN_POPPER,
    ASSIGN_POPPER,
    CLOSE_POPPER
} from './constants';

const defaultState = {};


export default (state = defaultState, action) => {
    // popperReducer.jsx
  const { type } = action;
  switch(type) {
    case OPEN_POPPER : {
      const { id } = action.payload;
      return { ...state, [id]:{ ...state[id], isOpen:true } };
    }

    case ASSIGN_POPPER : {
      const { id, data } = action.payload;
      return { ...state, [id]:{ ...state[id], data } };
    }

    case CLOSE_POPPER : {
      const { id } = action.payload;
      return { ...state, [id]:{ ...state[id], isOpen:false } }; //data is cleared
    }
  }
};
