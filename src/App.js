import React from 'react'
import Navbar from './Components/Navbar'
import Signup from './Components/Auth/Signup'
import './App.css'
import Inputbox from './Components/InputBox/Inputbox'
function App() {




  return (
    <div className='App'>
        <Navbar />
        {/* <Signup/> */}
        <Inputbox/>
    </div>
  )
}

export default App