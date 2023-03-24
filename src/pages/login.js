import React from 'react'
import './login.css'

const Login = () => {

 

  return (
    <div className='loginContainer'>
    <div class="mb-3">
  <label for="formGroupExampleInput" className="form-label">Email</label><br/>
  <input  className="input1" type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter your email"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Password</label><br/>
  <input className='input1' type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your password"/>
</div>
<div>
<button >Submit</button>

</div>
      
    </div>
  )
}

export default Login