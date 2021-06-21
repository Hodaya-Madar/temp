import '../css/App.css';
import { Table, Space} from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { useState } from 'react';

function TableData() {

    const [selectedRow, setSelectedRow] = useState(null);
    const jsonData = useSelector(state => state.reducer1.dataJson);
    const titleskeys = jsonData.map(obj => Object.keys(obj));
    const titles = new Set(titleskeys.flat());


    const columns = [];
    titles.forEach(title => {
        title !== '-ID' &&
        columns.push({
            title: title.replace(/-/i,''),
            key: title.replace(/ /g,''),
            dataIndex: title,
            render: (title === 'EventChecked') && (record => (
                <Space size="middle">
                    <input type="checkbox" checked={record === "True"} disabled/>
                </Space>
            ))
        })
    });

    console.log(selectedRow);

    return (
        <div className="tableContainer">
            <Table rowKey="-ID" className="table" columns={columns} dataSource={jsonData} pagination={{ pageSize: 5 }} 
                    onRow={(record) => ({
                        onClick: () => {
                            setSelectedRow(record);
                        },
                      })}
            />   
        </div>
    );
}

export default TableData;
