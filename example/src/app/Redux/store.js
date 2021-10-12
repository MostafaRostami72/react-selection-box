import {createStore} from 'redux';
import {reducers} from "./Reducers";

const store = createStore(
    reducers,
    {}
)

export default store;