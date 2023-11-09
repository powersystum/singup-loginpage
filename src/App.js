import React, { useState } from 'react'
import './componants/style.css'

function App() {
  const [action, setAction] = useState('Login');
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? <div></div> : <div className='input'>
            <i class="fa-solid fa-user"></i>
            <input type='text' name='' placeholder='Name' />
          </div>}
          <div className='input'>
            <i class="fa-solid fa-envelope"></i>
            <input type='email' name='' placeholder='Email Id' />
          </div>
          <div className='input'>
            <i class="fa-solid fa-lock"></i>
            <input type='password' name='' placeholder='password' />
          </div>
          {action ==="Sing Up"?<div></div>:<div className='forgot-password'>
            Lost Password? <span>Click Here</span>
          </div>}
          
          

          <div className='submit-container'>
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sing Up") }}>Sing Up</div>
            <div className={action === "Sing Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App