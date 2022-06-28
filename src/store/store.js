import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CounterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const createReduxStore = (initialValue = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialValue
    })
}