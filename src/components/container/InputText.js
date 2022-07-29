import React from 'react';
import '../style.css';

function InputText() {

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <input className='inputhttp' type={'text'} onChange={handleChange} />
    </>
  )
}

export default InputText