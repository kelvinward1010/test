import React, { useEffect, useState } from 'react'
import { Handle, useEdgesState, useNodes, useNodesState, useReactFlow } from 'react-flow-renderer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ClearIcon from '@mui/icons-material/Clear';
import '../style.css';

function Node({title,content, isConnectable, deleteNode}) {

    const nodes = useNodes();
    const [isActive, setIsActive] = useState(false);
    const reactFlowInstance = useReactFlow();
    const getNode = reactFlowInstance.getNodes();
    
    const getNodeIdandDeleteNode = (e) => {
        reactFlowInstance.setNodes((nds) =>nds.filter((nd) => !!nd.id && !nd.selected))
    }

    // const deleteNodeById = (id) => {
    //     reactFlowInstance.setNodes(nds => nds.filter(node => node.id !== id));
    // };


    
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
                            <ViewModuleIcon
                            style={{
                                height:"10px"
                            }}/>
                            <p style={{
                                fontSize:"10px"
                            }}>{title}</p>
                        </div>
                        <div
                            className="deleteNode"
                            onClick={getNodeIdandDeleteNode}
                        >
                            <ClearIcon style={{
                                height:"12px",
                                opacity:"0.7",
                                cursor:"pointer"
                            }}/>
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