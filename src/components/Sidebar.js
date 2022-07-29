import React from 'react';
import './style.css';
import ConstructionIcon from '@mui/icons-material/Construction';
import InputIcon from '@mui/icons-material/Input';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
          <div className='menu-title'>
            <InputIcon />
            <h4>INPUT</h4>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'fileNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>File</p>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'httpRequest')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>HTTP Request</p>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'exampleDataNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>Example Data</p>
          </div>
        </ul>
        <ul>
          <div className='menu-title'>
            <ConstructionIcon />
            <h4>TRANSFORM</h4>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'filterNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>Filter</p>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'sliceNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>Slice</p>
          </div>
        </ul>
        <ul>
          <div className='menu-title'>
            <MoreHorizIcon />
            <h4>MISC</h4>
          </div>
          <div 
            style={{marginLeft:"-40px"}}
            className='dndnode input'
            onDragStart={(event) => onDragStart(event, 'exportNode')} 
            draggable
          >
            <p style={{fontSize:"15px",fontWeight:"600", opacity:"0.7"}}>Export</p>
          </div>
        </ul>
    </aside>
  )
}

export default Sidebar



