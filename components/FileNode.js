import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Node from './container/Node';

function FileNode({isConnectable}) {

    const [file, setFile] = useState({})

    const fileUploadButton = () => {
        document.getElementById('fileButton').click();
        document.getElementById('fileButton').onchange = () =>{      
            setFile({fileUploadState:document.getElementById('fileButton').value});
        }
    }

    return (
        <>
            <Node title={'File'} content={(
                <>
                    <div
                        style={{
                            display:"flex",
                            marginLeft:"-25px",
                            width:"150px",
                            alignItems:"center"
                        }}
                    >
                        <p style={{
                            fontSize:"7px",
                            opacity:"0.7",
                            flex:"1"
                        }}>Drop file here or</p>
                        <button
                            className='buttonfile'
                            style={{
                                flex:"1.5",
                                fontSize:"7px",
                                backgroundColor:"#333154",
                                border:"none",
                                color:"white",
                                cursor:"pointer",
                                padding:"5px 0"
                            }}
                            onClick={fileUploadButton}
                        >
                            Open file dialog
                            <input id="fileButton" type="file" hidden />
                        </button>
                    </div>
                    <p
                        style={{
                            fontSize:"7px",
                            marginLeft:"-25px",
                            width:"150px",
                            opacity:"0.67"
                        }}
                    >Allowed types: csv, json, geojson, topojson</p>
                </>
            )}/>
        </>
    )
}

export default memo(FileNode)