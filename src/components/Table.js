import '../css/App.css';
import { Table, Space} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import EMail from '../components/EMail';
import Phone from '../components/Phone';
import { useState } from 'react';

function JsonTable() {

    const [selectedRow, setSelectedRow] = useState(null);
    const jsonData = useSelector(state => state.reducer1.dataJson);
    const titleskeys = jsonData.map(obj => Object.keys(obj));
    const titles = new Set(titleskeys.flat());
    const compArray = {
        'E-Mail' : EMail,
        'Phone' : Phone,
        'SMS' : ''
    };
    let InfoComponent = selectedRow ? compArray[selectedRow.EventType.replace(/ /g,'')] : '';

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
            <h1>Summery:</h1> 
            <div>count: {jsonData.length}</div>
            {InfoComponent && <InfoComponent row={selectedRow}/>} 
        </div>
    );
}

export default JsonTable;
