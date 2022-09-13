import React, { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'react-flow-renderer';
import ReadCsvAndXLSX from '../components/container/ReadCsvAndXLSX';
import Sidebar from '../components/Sidebar';
import '.././components/style.css';


const initialNodes = [
    {
        id: 'a',
        type: 'input',
        data: { label: 'Node A' },
        position: { x: 250, y: 25 },
    },

    {
        id: 'b',
        data: { label: 'Node B' },
        position: { x: 100, y: 125 },
    },
    {
        id: 'c',
        type: 'output',
        data: { label: 'Node C' },
        position: { x: 250, y: 200 },
    },
];

const initialEdges = [
    { id: 'ea-b', source: 'a', target: 'b' }
]

const edgeOptions = {
    animated: true,
    style: {
        stroke: 'white',
    },
};

const connectionLineStyle = { stroke: 'white' };

function OtherTest() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div className='dndflow'>
        <div
            className="reactflow-wrapper" 
            style={{
                width:'100vw',
                height:'100vh'
            }}
        >
            <Sidebar />
            <ReactFlow
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                defaultNodes={initialNodes}
                defaultEdges={initialEdges}
                defaultEdgeOptions={edgeOptions}
                fitView
                style={{
                    backgroundColor: '#D3D2E5',
                    flex:'1'
                }}
                connectionLineStyle={connectionLineStyle}
            />
        </div>
        </div>
    );
}

export default OtherTest