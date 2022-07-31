import React, { useState } from 'react'
import { Handle, useEdgesState, useNodesState } from 'react-flow-renderer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import '../style.css';
import { initialEdges, initialNodes } from '../../pages/Home';

function Node({title,content, isConnectable, deleteNode}) {

    return (
        <div
            style={{
                height: "100px",
                width:"160px",
            }}
            className="clicknode"
        >
            <Handle
                type='target'
                position='left'
                className='inputHandle'
                isConnectable={isConnectable}
                onConnect={(params) => console.log('handle Connect', params)}
            />
                <div className='fileNode'>
                    
                    <div style={{
                        borderBottom: "0.6px white solid",
                        marginTop:"-15px",
                        marginLeft:"-25px",
                        width:"150px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                        
                    }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"start",
                        }}>
                            <InsertDriveFileIcon 
                            style={{
                                height:"10px"
                            }}/>
                            <p style={{
                                fontSize:"10px"
                            }}>{title}</p>
                        </div>
                        <div
                            className="deleteNode"
                            // onClick={deleteNodeById}
                        >
                            X
                        </div>
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            <Handle
                type='source'
                position='right'
                className='outputHandle'
                isConnectable={isConnectable}
                onConnect={(params) => console.log('handle Connect', params)}
            />
        </div>
    )
}

export default Node