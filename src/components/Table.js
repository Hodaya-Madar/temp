import '../css/App.css';
import { Table, Space} from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { useState } from 'react';

function TableData() {

    const data = [];

    const columns = [
        {
          title: 'Name',
          dataIndex: 'candyName',
          key: 'candyName',
          render: (text, record) => (
            <Space size="middle">
                <a href="/#" onClick={(e)=>console.log(record)}>{record.candyName}</a>
            </Space>
            )
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        
    ];

    return (
        <div className="tableContainer">
            <Table className="table" columns={columns} dataSource={data} pagination={{ pageSize: 5 }} 
            />   
        </div>
    );
}

export default TableData;
