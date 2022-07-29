import React from 'react';
import { useReactFlow } from 'react-flow-renderer';
import ChooseFile from './container/ChooseFile';
import Table from './container/Table';
import './style.css';



function Bottom() {

    return (
        <div className='bottom'>
            <div className='bottom-left'>
                <div className='tt-bottom'>OUTPUT</div>
                <Table />
            </div>
            <div className='bottom-right'>
                <div className='tt-bottom'>LOGS</div>
                <div
                    className='logs'
                >Something error</div>
            </div>
        </div>
    )
}

export default Bottom