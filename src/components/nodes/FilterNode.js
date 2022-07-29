import React, { useRef, useState } from 'react'
import Node from '../container/Node'
import Select from '../container/Select';


const selectVaLue = [
    {
        value:"connect dataset",
        title:"connect dataset"
    }
]

function FilterNode() {

    return (
        <>
            <Node title={'Filter'} content={(
                <>
                    <form
                        style={{
                            display:"flex",
                            flexDirection:"column",
                            marginTop:"10px",
                            marginLeft:"-25px",
                            width:"150px",
                        }}
                    >
                        <label 
                            name="filter"
                            style={{
                                fontSize:"7px",
                                opacity:"0.7"
                            }}
                        >Column name:</label>
                        <Select data={selectVaLue}/>
                    </form>
                </>
            )}
            />
        </>
    )
}

export default FilterNode