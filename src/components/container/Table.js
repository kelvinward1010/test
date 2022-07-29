import React from 'react'
import { useSelector } from 'react-redux'
import ChooseFile, { DataContext } from './ChooseFile';
import '../style.css';

function Table({}) {

    const files = useSelector((state) => state.file.data);

    var title = files[0]?.columns;

    const WriteTitle =()  =>{
        var text = "";

        for(let i =0 ; i< files[0]?.columns.length ; i++) {
            text += "<li>" + title[i] + "</li>";
        }
        document.getElementById("idTitle").innerHTML = text
    }


    return (
        <>
            <div className="container">
                <table className="table-scroll small-first-col">
                    {/* <thead>
                        {files[0]?.columns.length && files[0].columns.map((item,idx) => (
                            <tr key={idx}>
                                <th>{item.Id}</th>
                            </tr>
                        ))}
                    </thead> */}
                    <tbody className="body-half-screen">
                        {files[0]?.parsedData.length > 0 && files[0]?.parsedData.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Eyes}</td>
                                <td>{item.Face}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table