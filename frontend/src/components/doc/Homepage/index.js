import React,{useEffect, useState} from 'react';
import FileViewer from 'react-file-viewer';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { TextField,MenuItem } from '@mui/material';
import './index.scss';
const HomePage = () => {
  const [docxFile, setDocxFile] = useState(null);
  const [process, setProcess] = useState(null);

  const handleFileChange = (event) => {
    setDocxFile(event.target.files[0]);

  };



  return (
    <>
     <div className="App">
        <div className="sidebar">
          <Link onClick={()=>{setProcess("Dashboard")}}>Dashboard</Link>
          <Link onClick={()=>{setProcess("Profile")}}>Profile</Link>
          <Link onClick={()=>{setProcess("Setting")}}>Settings</Link>
          <div style={{width:'100%', bottom:'0',position:'absolute'}}>
          <Row><Col>
          <TextField margin='normal' required sx={{ width: '100%' }} id='gender' select name='gender' label='Client'  >

<MenuItem value={'Male'}>Male</MenuItem>
<MenuItem value={'Female'}>Female</MenuItem>
<MenuItem value={'Other'}>Other</MenuItem>
</TextField>
   
   </Col><Col><TextField margin='normal' required sx={{ width: '100%' }} id='gender' select name='gender' label='Journal'  >

<MenuItem value={'Male'}>Male</MenuItem>
<MenuItem value={'Female'}>Female</MenuItem>
<MenuItem value={'Other'}>Other</MenuItem>
</TextField>

</Col></Row>
         
<TextField margin='normal' required fullWidth id='email' name='email' type='file' label='Select a Docx File'  InputLabelProps={{ shrink: true, required: true }} />

          <button className='w-100'>DOWNLOAD</button>
          </div>
        </div>
        <div className="main-content">
        {docxFile && (
        <div style={{ height: '750px' }}>
          <FileViewer
            fileType="docx"
            filePath={URL.createObjectURL(docxFile)}
            key={docxFile.name}
          />
        </div>
      )}

    </div>
    </div>
    </>
  );
}

export default HomePage;