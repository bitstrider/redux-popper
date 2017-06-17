import { connect } from 'react-redux';
import { openPopper, closePopper, assignPopper } from './actions';

const reduxPopper = name => WrappedComponent => {
  return connect(
            state => ({ ...state.poppers[name] }),
            dispatch => ({
              close:()=>dispatch(closePopper(name)),
              open:()=>dispatch(openPopper(name)),
              assign:(data)=>dispatch(assignPopper(name,data))
            })
        )(WrappedComponent);
};

export default reduxPopper;

export * from './actions';
export reducer from './reducer';
