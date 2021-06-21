import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducer1 from './reducers/reducer1'; 
import { updateJsonDataMiddleware } from './middlewares'

const reducer = combineReducers({ reducer1 });

const store = createStore( reducer, 
                           applyMiddleware( updateJsonDataMiddleware )
                         );
export default store;
window.store = store;
