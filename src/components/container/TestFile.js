import React, { useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx'

const HomeComponent = () => {
    // const [movies, setMovies] = useState([]);

    // const handleImport = ($event) => {
    //     const files = $event.target.files;
    //     if (files.length) {
    //         const file = files[0];
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const wb = read(event.target.result);
    //             const sheets = wb.SheetNames;

    //             if (sheets.length) {
    //                 const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
    //                 setMovies(rows)
    //             }
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    // }

    // const handleExport = () => {
    //     const headings = [[
    //         'Movie',
    //         'Category',
    //         'Director',
    //         'Rating'
    //     ]];
    //     const wb = utils.book_new();
    //     const ws = utils.json_to_sheet([]);
    //     utils.sheet_add_aoa(ws, headings);
    //     utils.sheet_add_json(ws, movies, { origin: 'A2', skipHeader: true });
    //     utils.book_append_sheet(wb, ws, 'Report');
    //     writeFile(wb, 'Movie Report.xlsx');
    // }

    var file = document.getElementById('docpicker')
    // var viewer = document.getElementById('dataviewer')
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
    
        // var firstSheet = workbook.SheetNames[0];
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
            {/* <div className="row mb-2 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button onClick={handleExport} className="btn btn-primary float-right">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Movie</th>
                                <th scope="col">Category</th>
                                <th scope="col">Director</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    movies.length
                                    ?
                                    movies.map((movie, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ index + 1 }</th>
                                            <td>{ movie.Movie }</td>
                                            <td>{ movie.Category }</td>
                                            <td>{ movie.Director }</td>
                                            <td><span className="badge bg-warning text-dark">{ movie.Rating }</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No Movies Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div> */}
            <label htmlFor="avatar">Choose an Excel or CSV file:</label>
            <input onChange={importFile} type="file" id="docpicker"/>
            <div id="dataviewer"></div>
        </>

    );
};

export default HomeComponent