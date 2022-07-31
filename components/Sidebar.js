import React from 'react';
import './style.css';

function Sidebar() {

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData("nodeName", event.target.firstChild.nodeValue);
    event.dataTransfer.setData("className", event.target.className);
    event.dataTransfer.effectAllowed = 'move';
  };


  return (
    <aside>
        <h3>Block Library</h3>
        <div>
          <input
            type={'search'}
            className='search'
            placeholder='search...'
          />
        </div>
        <ul>
          <h4 style={{marginLeft:"-40px"}}>Input</h4>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'fileNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600"}}>File</p>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'pasteNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600"}}>Paste</p>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'httpRequest')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600"}}>HTTP Request</p>
          </div>
        </ul>
    </aside>
  )
}

export default Sidebar



