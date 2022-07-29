import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ReadCsvAndXLSX({fn}) {

    const [datas,setData] = useState([]);

    const [error, setError] = useState('')

    var file = document.getElementById('fileButton')
    file?.addEventListener('change', importFile);
    
    function importFile(evt) {
        var f = evt.target.files[0];
    
        if (f) {
        var r = new FileReader();
        r.onload = e => {
            var contents = processExcel(e.target.result);
            console.log(contents)
        }
        r.readAsBinaryString(f);
        } else {
            console.log("Failed to load file");
        }
    }
    
    function processExcel(data) {
        var workbook = XLSX.read(data, {
        type: 'binary'
        });
        var data = to_json(workbook);
        return data
    };
    
    function to_json(workbook) {
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                header: 1
            });
            if (roa.length) result[sheetName] = roa;
        });
        return JSON.stringify(result, 2, 2);
    };

    console.log(file)
    
    return (
        <>
            <div
                style={{
                    display:"flex",
                    flexDirection:"column"
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
                    }}
                    onClick={fn}
                >
                    Open file dialog
                    <input 
                        id="fileButton" 
                        type="file" 
                        onChange={importFile}
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