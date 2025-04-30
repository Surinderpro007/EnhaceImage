const API_KEY = "wxnqqpx55zyvct445"
const BASE_URL = "https://techhk.aoscdn.com/"
// "https://techhk.aoscdn.com/api/tasks/visual/scale"

import axios from "axios";

export const enhancedImageAPI = async (file) => {
    try {
       
      const taskId = await uploadImage(file); 
      console.log("Image upload successful , Task ID: ", taskId);

      const enhancedImageData = await PollForEnhancedImage(taskId); 
    //   const enhancedImageData = await fetchEnhancedImage("d5272b41-12ff-4f9b-b63e-c750e7a73597"); // Fetch the enhanced image using the task ID
        console.log("Enhanced image data: ", enhancedImageData);
        return enhancedImageData; // Return the enhanced image data
        
    } catch (error) {
        console.log("Error in enhancedImageAPI->: ", error.message);
    }
}


const uploadImage = async (file) => {
 // code to upload image 
        // /api/tasks/visual/scale

        const formData = new FormData();
        formData.append("image_file", file);

    const {data} =  await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData,{
headers:{
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY
            }
        })
       
// console.log(data)

if(!data?.data?.task_id){
    throw new Error("Error while uploading image, please try again")
}
return data?.data?.task_id; // Return the task ID from the response

}


const fetchEnhancedImage = async (taskId) => {


      const {data} =  await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,{
            headers:{
                "X-API-KEY": API_KEY,
            }
        })
       
console.log(data.data.image)
if(!data?.data){
    throw new Error("Error while fetching enhanced image, please try again")
}

// console.log(data.data.image)
return data.data; // Return the enhanced image URL from the response
}


const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);
    if (result.state===4) {
        console.log("Processing...")
        if (retries >= 15) {
            throw new Error("Max retries reached. Please try again later.");
        }
        await new Promise(resolve => setTimeout(resolve, 3000));

        return PollForEnhancedImage(taskId, retries + 1);
    }
    console.log("Enhanced image URL: ", result);
    return result;


}


// {task_id: 'd5272b41-12ff-4f9b-b63e-c750e7a73597'}
// message
// : 
// "success"
// status
// : 
// 200
