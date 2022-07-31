import React, { useState } from 'react';
import './style.css';

function Head() {

    const [openView, setOpenView] = useState(false)

    return (
        <div className='head'>
            <div className='head-1'>
                <img className='logo' src='./img/fl.png' alt='' />
                <div className='head-tag' onClick={() =>setOpenView(!openView)}>
                    <h5>View</h5>
                </div>
                {openView && 
                    <>
                        <ul className='view-elements'>
                            <li>Auto Layout Nodes</li>
                            <li>Fit View</li>
                            <li>Zoom 100%</li>
                            <li>Zoom In</li>
                            <li>Zoom Out</li>
                            <li>All Nodes</li>
                        </ul>
                    </>
                }
                <div className='head-tag'>
                    <h5>Help</h5>
                </div>
            </div>
            <div className='head-2'>
                demo flow
            </div>
            <div className='head-3'>
                <h5>LOGIN</h5>
                <h5>SIGN UP</h5>
            </div>
        </div>
    )
}

export default Head