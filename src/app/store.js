import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from "../reducer/index.js";

const store=createStore(rootReducer)

export default store;