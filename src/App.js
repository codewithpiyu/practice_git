import React from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Sidebar/>
      <Navbar />
      <Routes>
          <Route path = "/Dashboard" element = {<Dashboard/>}/>

      </Routes>
      
      </BrowserRouter>
      
      
      </div>
  )
}

export default App
