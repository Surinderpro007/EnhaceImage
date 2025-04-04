
import './App.css'
import Home from './components/Home'



function App() {
 


  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 ' > 
    <div className="text-center mb-8">
      <h1 className='text-xl font-5xl font-bold text-gray-500 mb-2'>AI Image enhance</h1>
      <p className='text-lg text-grey-500 '>Upload your images and enhance them with AI</p>
    </div>
     <Home/>

     <div className="text-lg text-gray-500 mt-5">
     <p> Powered by AI</p>
     </div>  
       
    </div>
    </>
  )
}

export default App
