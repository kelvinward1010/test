import React from 'react'
import InputText from '../container/InputText'
import Node from '../container/Node'

function HTTPRequestNode() {
  return (
    <>
        <Node 
            title={'HTTP Request'}
            content={(
                <>
                    <div
                        style={{
                            marginLeft:"-25px",
                            width:"150px",
                        }}
                    >
                        <p
                            style={{
                                fontSize:"7px",
                                opacity:"0.7",
                            }}
                        >URL:</p>
                        <InputText />
                    </div>
                    <button
                        className='buttonfile'
                        style={{
                            marginLeft:"-25px",
                            fontSize:"7px",
                            border:"none",
                            cursor:"pointer",
                            padding:"3px 5px",
                        }}
                    >Load Data</button>
                </>
            )}
        />
    </>
  )
}

export default HTTPRequestNode