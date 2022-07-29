import React from 'react'
import { Handle, useReactFlow } from 'react-flow-renderer';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ClearIcon from '@mui/icons-material/Clear';
import '../style.css';
import { CSVLink } from "react-csv";


const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
];
  
const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const dataJson = {
    id: 74,
    parentId: null,
    value: "",
    children: [
      {
        id: 62,
        parentId: 74,
        value: "Task 7",
        children: [
          {
            id: 56,
            parentId: 62,
            value: "Task 1"
          },
          {
            id: 63,
            parentId: 62,
            value: "Task 4"
          }
        ]
      },
      {
        id: 86,
        parentId: 74,
        value: "Task 8",
        children: [
          {
            id: 80,
            parentId: 86,
            value: "Task 5",
            children: [
              {
                id: 81,
                parentId: 80,
                value: "Task 2"
              },
              {
                id: 76,
                parentId: 80,
                value: "Task 3"
              }
            ]
          },
          {
            id: 87,
            parentId: 86,
            value: "Task 6"
          }
        ]
      }
    ]
}
  

function ExportNode({isConnectable}) {

    const reactFlowInstance = useReactFlow();
    
    const getNodeIdandDeleteNode = (e) => {
        reactFlowInstance.setNodes((nds) =>nds.filter((nd) => !!nd.id && !nd.selected))
    }

    const handleExportDataToJson = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(dataJson)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
        link.click();
    }

    console.log(data);

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
                className='inputHandleOther'
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
                            }}>Export</p>
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
                    <div
                        className='export-Container'
                    >
                        <CSVLink data={data} headers={headers}>
                            <button
                                    className='button-export'
                                    type='button'
                                >
                                    Dowload csv
                                </button>
                        </CSVLink>
                        <button
                            className='button-export'
                            onClick={handleExportDataToJson}
                        >
                            Dowload json
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default ExportNode