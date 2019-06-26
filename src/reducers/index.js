import { combineReducers } from 'redux';
import meta from './meta';
import images from './images';
import status from './status';

const appReducer = combineReducers({
    images,
    meta,
    status
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }

    return appReducer(state, action);
};

export default rootReducer;