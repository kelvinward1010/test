import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { fileChoose } from '../../redux/fileSlice';
import { nanoid } from '@reduxjs/toolkit';
import readXlsxFile from 'read-excel-file';

export const DataContext = React.createContext();


const allowedExtensions = ["csv","xlsx"];

function ChooseFile({ funtion }) {
    
    //This state will store the parsed data
    const [data, setData] = useState([]);

    //It state will contain the error 
    const [error, setError] = useState(false);

    //It will store the file uploaded by the user
    const [file, setFile] = useState("");

    //This is the title column
    const [title, setTitle] = useState([]);

    const dispatch = useDispatch()

    //This funtion will be called when the file input change
    const handleFileChange = (e) => {
        setError("");

        //Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            //Check the file extensions, if it not included in the allowed extensions, we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError('Please input a csv file');
                return;
            }

            //If the type is correct set the state
            setFile(inputFile);

        }
    };

    const handleParse =  () => {
        //If user clicks the parse button without a file we show a error
        if (!file) return setError(true);

        //Initialize a reader which allows user to read any file or blob
        const reader = new FileReader();

        //Event LIstener on reader when the file loads, we parse it and set the data
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            const columns = Object.keys(parsedData[0]);
            setData(columns);
            const count = columns.length
            setData(parsedData)
            dispatch(
                fileChoose({
                id: nanoid(),
                parsedData,
                columns,
                count
                })
            )
        };
        reader.readAsText(file)
    }

    useEffect(() => {
        handleParse()
        
    }, [file])



    //Read File XLSX
    const input = document.getElementById('fileButton');
    input?.addEventListener('change', () => {
        readXlsxFile(input.file[0]).then((data) => {
            console.log(data)
        })
    } )

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
                        padding: "5px 0"
                    }}
                    onClick={funtion}
                >
                    Open file dialog
                    <input 
                        id="fileButton" 
                        type="file" 
                        onChange={handleFileChange}
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
            {/* <DataContext.Provider
                value={{data}}
            >
                {children}
            </DataContext.Provider> */}
        </>
    )
}

export default ChooseFile


export const csvdata =8