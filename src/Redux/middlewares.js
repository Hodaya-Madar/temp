import {SAVE_JSON_DATA} from '../Redux/actions';

export const updateJsonDataMiddleware = store => next => action =>{
    if(action.type !== SAVE_JSON_DATA) return next(action);
    
    const data = action.payload;
    action.payload = data.map(obj => {
        obj['AdditionalInfo'] = getInfo(obj);
        obj.RecordFile && delete obj.RecordFile;
        obj.AttachmentCount && delete obj.AttachmentCount;
        obj.CC && delete obj.CC;
        return obj;
    });

    return next(action);
}

const getInfo = obj =>{
    let row = '';
    row += obj.RecordFile ? 'RecordFile: ' + obj.RecordFile : '';
    row += obj.AttachmentCount ? ' AttachmentCount: ' + obj.AttachmentCount : '';
    row += obj.CC ? ' CC: ' + obj.CC : '';
    return row;
}