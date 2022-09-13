import React, { useState } from 'react';
import { read, utils, writeFile } from 'xlsx';

function ReadCsvAndXLSX({fn}) {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const handleImport = (e) => {
        const files = e.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setData(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }else{
            setError('None File')
        }
    }

    console.log(data)
    
    return (
        <>
            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                }}
            >
                <button
                    className='buttonfile'
                    style={{
                        flex: "1.5",
                        fontSize: "7px",
                        backgroundColor: "#333154",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        padding: "5px 5px",
                        zIndex:'100',
                        position: 'absolute'
                    }}
                    onClick={fn}
                >
                    Open file dialog
                    <input 
                        id="fileButton" 
                        type="file" 
                        onChange={handleImport}
                        hidden 
                        name={'file'}
                    />
                </button>
                <span
                    style={{
                        color:'red',
                        fontSize:"6px",
                        marginBottom:"-10px"
                    }}
                >{error}</span>
            </div>
        </>
    )
}

export default ReadCsvAndXLSX