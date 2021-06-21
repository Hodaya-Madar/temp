import '../css/App.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const Comp1 = () => {
   const dispatch = useDispatch();

    return (
        <div className="homeContainer">
            <Button><Link to="/Table">{'>>'}</Link></Button>                                                                       
      </div>
    );
}

export default Comp1;
