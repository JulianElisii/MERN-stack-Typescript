import React from 'react' 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import VideoForm from './components/Video/VideoForm';
import VideoList from './components/Video/VideoList';


const App = () => {
  return (
    
    <Router>
       <Navbar/>
      <div className='container p-4' >
        <Routes>
          <Route path='/' element={<VideoList/>}/>
          <Route path='/new-Video'  element={<VideoForm/>}/>
          <Route path='/update/:id'  element={<VideoForm/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
    
  )
}

export default App