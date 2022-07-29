import React, { useState } from 'react'
import Node from '../container/Node'
import Select from '../container/Select'


const selectValue = [
    {
        value:"Countries Indicators",
        title:"Countries Indicators"
    },
    {
        value:"Berlin geojson",
        title:"Berlin geojson"
    },
    {
        value:"Berlin outline geojson",
        title:"Berlin outline geojson"
    },
]


function ExampleDataNode() {

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
        <>
            <Node 
                title={'Example Data'}
                content={(
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
                            <Select data={selectValue} />
                            <p
                            style={{
                                textAlign: "left",
                                color: "rgb(98, 114, 164)",
                                fontSize:"7px"
                            }}
                            >Data Source: gapminder.com</p>
                        </form>
                    </>
                )}
            />
        </>
    )
}

export default ExampleDataNode