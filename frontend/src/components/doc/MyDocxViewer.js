import React, { useState,useEffect } from 'react';
import FileViewer from 'react-file-viewer';

function MyDocxViewer() {
  const [docxFile, setDocxFile] = useState(null);

  const handleFileChange = (event) => {
    setDocxFile(event.target.files[0]);

  };

  
  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {docxFile && (
        <div style={{ height: '94vh' }}>
          <FileViewer
            fileType="docx"
            filePath={URL.createObjectURL(docxFile)}
            key={docxFile.name}
          />
        </div>
      )}
    </>
  );
}

export default MyDocxViewer;