import React, { useState } from 'react';


function Select({data}) {
    const [filter, setFilter] =useState({})

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name] : value
        })
        console.log(value)
    }
    return (
        <select 
            name="filter" 
            id='filter'
            style={{
                outline:"none",
                border:"1px solid rgb(99, 179, 237)",
                borderRadius:"4px",
                backgroundColor:"#1a202c",
                marginTop:"10px",
                color:"white",
                opacity:"0.7",
                fontSize:"7px",
                padding:"5px"
            }}
            onChange={handleFilter}
        >
            {data.map((item,idx) => (
                <option key={idx} className='option-filter' value={item.value}>&larr; {item.title}</option>
            ))}
        </select>
    )
}

export default Select