import {
    OPEN_POPPER,
    ASSIGN_POPPER,
    CLOSE_POPPER
} from './constants';

//actions.jsx
export const openPopper = (id) => ({
  type:OPEN_POPPER,
  payload:{ id }
});

export const closePopper = (id) => ({
  type:CLOSE_POPPER,
  payload:{ id }
});

export const assignPopper = (id,data) => ({
  type:ASSIGN_POPPER,
  payload:{ id,data }
});

export default { openPopper, closePopper, assignPopper };
