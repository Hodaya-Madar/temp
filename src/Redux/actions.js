export const SAVE_JSON_DATA = 'SAVE_JSON_DATA';
export const SAVE_SELECTED_ROW = 'SAVE_SELECTED_ROW';

export const SaveJsonData = (data) =>{
    return { type: SAVE_JSON_DATA, payload: data};
}

export const SaveSelectedRow = (row) =>{
    return { type: SAVE_SELECTED_ROW, payload: row};
}



