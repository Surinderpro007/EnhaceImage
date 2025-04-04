import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from '../utils/enhanceImageApi'

const Home = () => {

    const [loading, setLoading] = useState(false)
    const [uploadedimage, setuploadedImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)

  const imageUploadHandler = async(file) => {
    setuploadedImage(URL.createObjectURL(file))
    setLoading(true)
            try{
                const enhancedURL = await enhancedImageAPI(file)
                setEnhancedImage(enhancedURL)
                setLoading(false)
            }
            catch(err){
                console.log(err)
                alert("Error while enhancing image, please try again")
            }

    }

  return (
    <>
      
      <ImageUpload imageUploadHandler={imageUploadHandler}/>
      <ImagePreview upload={uploadedimage} enhance={enhancedImage} loading={loading} />
    </>
  )
}

export default Home
