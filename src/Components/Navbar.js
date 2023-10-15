import React from 'react'
import {ReactComponent as Keyboard} from '../Assets/keyboard.svg'
import {ReactComponent as User} from '../Assets/user.svg'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-right'>
            <span className='logo'>TypeCat</span>
            <Keyboard/>
        </div>
        <div className='navbar-left'>
            <User/>
        </div>

    </div>
  )
}

export default Navbar