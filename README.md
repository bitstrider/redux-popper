# redux-popper

🎈 redux state management for popup components

## Installation

```sh
npm install redux-popper --save-dev
```

## Setup
Combine the redux-popper reducer with your own application reducers

```javascript
import { reducer as popperReducer } from 'redux-popper';
const reducers = combineReducers({
    /* ... */
    poppers: popperReducer
})
```

## Usage

Here's an example using [`material-ui/Dialog`](http://www.material-ui.com/#/components/dialog) as the decorated component

```javascript
@reduxPopper('coolDialog')
class CoolDialog extends Component {
    render() {        
        const {isOpen, data, close, open, assign} = this.props
        const someData = {comparedTo:'a cucumber'}
        return (
            <div>
                <Button onClick={()=> {assign(someData);open()}}>
                    Open Dialog
                </Button>

                <Dialog open={isOpen} onRequestClose={close} >
                    Cool as...{data.comparedTo}
                </Dialog>
            </div>
        )
    }
}

// and alternatively, without the '@' decorator syntax:
CoolDialog = reduxPopper('coolDialog',CoolDialog)
```

To open / close / assign a registered popper from outside this component, simply call `dispatch` with the corresponding built-in action creator:

```javascript
import {openPopper, closePopper, assignPopper} from 'redux-popper'

/* ... */

dispatch(openPopper('coolDialog'))
dispatch(closePopper('coolDialog'))
dispatch(assignPopper('coolDialog',{comparedTo:'a cup of cold-brew'}))

```

## State Shape

Here's the state resulting from the example above:

```javascript
//how the state looks
{
    /* ... */
    poppers: {
        'coolDialog': {
            isOpen: true, /* bool: (true|false) */
            data: {comparedTo:'a cucumber'}
        }
    }
}

```

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-eslint](https://github.com/babel/babel-eslint): Custom parser for ESLint
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages): Babel preset for all React plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 0 plugins
- [babel-register](https://github.com/babel/babel/tree/master/packages): babel require hook
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-rackt](https://github.com/rackt/eslint-config-rackt): Shareable eslint config for rackt repos
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): React specific linting rules for ESLint
- [react](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [react-redux](https://github.com/reactjs/react-redux): Official React bindings for Redux
- [redux](https://github.com/reactjs/redux): Predictable state container for JavaScript apps
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`)


## License

ISC
