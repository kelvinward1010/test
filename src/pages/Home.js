import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge,
  MiniMap,
  getConnectedEdges,
  Position,
  Background,
} from 'react-flow-renderer';

import Sidebar from '../components/Sidebar';

import '../components/style.css';
import FileNode from '../components/nodes/FileNode';
import HTTPRequestNode from '../components/nodes/HTTPRequestNode';
import FilterNode from '../components/nodes/FilterNode';
import SliceNode from '../components/nodes/SliceNode';
import ExampleDataNode from '../components/nodes/ExampleDataNode';
import CustomEdge from '../components/container/CustomEdge';
import ExportNode from '../components/nodes/ExportNode';
import PasteNode from '../components/nodes/PasteNode';


export const initialNodes = [

];


let id = 0;
const getId = () => `dndnode_${id++}`;

let edsId = 1;
const getEdsId = () => `e_${edsId++}`;
const snapGrid = [20, 20];

export const initialEdges = [{ id: getEdsId, source: getId, target: getId, label: 'updatable edge' }];

const nodeTypes = {
    fileNode: FileNode,
    httpRequest: HTTPRequestNode,
    filterNode: FilterNode,
    sliceNode: SliceNode,
    exampleDataNode: ExampleDataNode,
    exportNode: ExportNode,
    pasteNode: PasteNode,
}

const edgeTypes = {
    customedge: CustomEdge,
}

const nodeColor = (node) => {
    switch (node.type) {
      case 'fileNode':
        return 'green';
      case 'httpRequest':
        return '#00ff00';
      case 'filterNode':
        return 'red';
      case 'sliceNode':
        return 'yellow';
      default:
        return '#eee';
    }
};


function Home() {

    const reactFlowWrapper = useRef(null);
    const edgeUpdateSuccessful = useRef(true);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ 
        ...params, 
        animated: true, 
        style: { stroke: 'white' }
        }, eds)),
        []
    );
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

    // Add Node
    const onDrop = useCallback(
        (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const name = event.dataTransfer.getData("nodeName");
        const className = event.dataTransfer.getData("className");

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });

        const newNode = {
            id: getId(),
            type,
            position,
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
            dragHandle: ".custom-drag-handle",
            data: {},
          };

        setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );


       //delete
       const deleteNodeById = (id) => {
        setNodes(nds => nds.filter(node => node.id !== id));
    };



    

    //Update Edges
    const onEdgeUpdateStart = useCallback(() => {
        edgeUpdateSuccessful.current = false;
    },[])

    const onEdgesUpdate = useCallback((oldEdge, newConnection) => {
        edgeUpdateSuccessful.current = true;
        setEdges((eds) => updateEdge(oldEdge, newConnection, eds))
    },[])

    const onEdgesUpdateEnd = useCallback((_,edge) => {
        if(!edgeUpdateSuccessful.current){
        setEdges((eds) =>eds.filter((e) => e.id !== edge.id))
        }
        edgeUpdateSuccessful.current = true
    },[])
    
    return(
        <div className='dndflow'>
            <ReactFlowProvider>
                <Sidebar />
                <div 
                    className="reactflow-wrapper" 
                    style={{
                        width:"100vw",
                        height:"70vh"
                    }}
                    ref={reactFlowWrapper}
                >
                    <ReactFlow 
                        nodes={nodes} 
                        edges={edges} 
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        onLoad={onLoad}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onNodesDelete={deleteNodeById}
                        onEdgeUpdate={onEdgesUpdate}
                        onEdgeUpdateStart={onEdgeUpdateStart}
                        onEdgeUpdateEnd={onEdgesUpdateEnd}
                        // snapToGrid={true}
                        // snapGrid={snapGrid}
                        className="touchdevice-flow"
                        fitView
                    >
                        <Controls />
                        <MiniMap 
                            style={{
                                position:"absolute"
                              }}
                              nodeColor={nodeColor}
                        />
                        <Background />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    );
}

export default Home

