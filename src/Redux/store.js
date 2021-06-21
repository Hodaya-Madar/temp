import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducer1 from './reducers/reducer1'; 
import { middleware } from './middlewares'

const reducer = combineReducers({ reducer1 });

const store = createStore( reducer, 
                           applyMiddleware( middleware )
                         );
export default store;
window.store = store;
