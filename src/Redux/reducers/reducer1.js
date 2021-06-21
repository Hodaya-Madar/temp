import produce from 'immer';
import { SAVE_JSON_DATA } from '../actions';

const initialState = {
    dataJson: []
};


export default produce((state, action) =>{
    switch (action.type) {
        case SAVE_JSON_DATA:
            state.dataJson = action.payload;
            break;
        default: break;
    }
}, initialState)