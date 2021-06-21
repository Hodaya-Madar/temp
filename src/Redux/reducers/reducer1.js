import produce from 'immer';
import { SAVE_DATA } from '../actions';

const initialState = {
    data: []
};


export default produce((state, action) =>{
    switch (action.type) {
        case SAVE_DATA:
            state.data = action.payload;
            break;
        default: break;
    }
}, initialState)