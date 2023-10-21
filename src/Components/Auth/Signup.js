import React from 'react'

function Signup() {
  return (
    <div className='signup'>
      <div>Signup</div>
      <div>
        <input type="text" placeholder='Enter Email' className='email'/>
        <input type="text" placeholder='Enter Password' className='password'/>
        <input type="text" placeholder='Enter Confirm Password' className='confirm-password'/>
        <button className='btn-signup'>SignUp</button>       
      </div>
    </div>
  )
}

export default Signup