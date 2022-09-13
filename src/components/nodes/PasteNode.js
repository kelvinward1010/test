import React, { useState } from 'react';
import Node from '../container/Node'
import '../style.css';

const selectPaste = [
    {
        value:"JSON",
        title:"JSON"
    },
    {
        value:"CSV",
        title:"CSV"
    },
    {
        value:"TEXT",
        title:"TEXT"
    },
]

function PasteNode() {

    const [filter, setFilter] =useState({});
    const [error, setError]  = useState('');

    const [data,setData] = useState('');
    const [json,setJson] = useState([])
    const [csv,setCsv] = useState([])

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name] : value
        })
    }


 
    const handleCheck = (e) => {

        const valueInput = e.target.value
        if(filter.filter === 'TEXT' && typeof valueInput === 'string' ){
            setData(valueInput)
            console.log('THIS IS TEXT')
        }else if(filter.filter === 'JSON' && typeof valueInput === 'string' ){
            var jsonDT = JSON.parse(valueInput)
            setJson(jsonDT)
            console.log('THIS IS JSON')
            console.log(json)
        }else if(filter.filter === 'CSV' && typeof valueInput === 'string' ){
            var lines= valueInput.split("\n");
            var result = [];
            var headers=lines[0].split("\t");
            for(var i=1;i<lines.length;i++){
                var obj = {};
                var currentline=lines[i].split("\t");
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
            setCsv(result)
            console.log('THIS IS CSV')
            console.log(csv)
        }else{
            setError('What file you choose?')
            console.log(error)
        }
    }

    return (
        <>
            <Node 
                title={'Paste'}
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
                        <label 
                            name="filter"
                            style={{
                                fontSize:"7px",
                                opacity:"0.7"
                            }}
                        >Column name:</label>
                        <select 
                            name="filter" 
                            id='filter'
                            style={{
                                outline:"none",
                                border:"1px solid rgb(99, 179, 237)",
                                borderRadius:"4px",
                                backgroundColor:"#1a202c",
                                marginTop:"5px",
                                color:"white",
                                opacity:"0.7",
                                fontSize:"7px",
                                padding:"3px"
                            }}
                            onChange={handleFilter}
                        >
                            {selectPaste.map((item,idx) => (
                                <option key={idx} className='option-filter' value={item.value}>&larr; {item.title}</option>
))}
                        </select>
                        <div>
                            <textarea onChange={handleCheck}  className='value-Pasted'/>
                        </div>
                    </form>
                    </>
                )}
            />
        </>
    )
}

export default PasteNode