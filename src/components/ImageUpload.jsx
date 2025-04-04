import React from 'react'

const ImageUpload = (props) => {
    // Api key = wxd577wyq3j1rvnf0 

    const ShowImageHandler = (e) => {
       const file = e.target.files[0];

    if(file){
        props.imageUploadHandler(file)
    }
    }

  return (
    <div className='bg-white shadow-md rounded-lg p-6 max-w-md max-w-2xl mx-auto'>
      <label htmlFor="fileInput" className='block w-fill cursor-pointer border-1 border-dashed border-grey-500 rounded-lg p-4 text-center hover:bg-gray-100 hover:border-blue-500 transition duration-200 ease-in-out'>
      <p>click and drag to upload your image</p>
      <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler} />
      </label>
     
    </div>
  )
}

export default ImageUpload
