import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
    console.log(props)
  return (
    <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-4xl' >

            <div className='bg-white shadow-md rounded-lg overflow-hidden '>
                <h2 className='text-xl font-semibold text-center bg-gradient-to-r from-red-400 via-blue-500 to-purple-600 text-white py-2'>Original Image</h2>

                 {props.upload ?
                <img src={props.upload} alt="" className='w-full h-full object-cover' /> :
                <div className='flex items-center justify-center h-80 bg-gray-200 border-dashed '>
                      No Image Selected
                </div>}
                    
            </div>

            {/* Ehnace image */}

            <div className='bg-white shadow-md rounded-lg overflow-hidden '>
               <h2 className='text-xl font-semibold text-center bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 text-white py-2'>Enhanced Image</h2>
                
                
                {props.enhance && !props.loading && (
                    <img src="" alt="" className='w-full h-full object-cover' />
                )}
                {props.loading ? <Loading /> :  <div className='flex items-center justify-center h-80 bg-gray-200 border-dashed '>
                        No Enhanced Image 
                     </div>
                }   


            </div>

    </div>
  )
}

export default ImagePreview
