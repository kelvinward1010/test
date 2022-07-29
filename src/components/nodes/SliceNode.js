import React from 'react'
import Node from '../container/Node'

function SliceNode() {
    return (
        <>
            <Node 
                title={'Slice'}
                content={(
                    <>
                        <div
                            style={{
                                marginLeft:"-25px",
                                width:"150px",
                            }}
                        >
                            <p style={{
                                fontSize:"7px"
                            }}>&larr; connect dataset</p>
                        </div>
                    </>
                )}
            />
        </>
    )
}

export default SliceNode