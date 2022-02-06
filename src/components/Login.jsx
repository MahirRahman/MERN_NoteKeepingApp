import * as React from 'react';
import './Login.scss';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';

export default function SignIn() {
    return(
      <section>
      <a href="/"> &larr; Back To Home</a>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
              <div className="card-body p-5 text-center">

              <Avatar variant="circular" sx={{bgcolor: 'secondary.main', mx: '44%'}}>
                <LockOutlinedIcon />
              </Avatar>
              <br></br>
                <h3 className="mb-5">Sign in</h3>
    
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                  <label for="floatingPassword">Password</label>
                </div>
    
                <div class="form-check my-3" style={{textAlign: "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">Remember Password</label>
                </div>
                <div className='d-grid gap-3'>
                <button className="btn btn-primary" type="submit">Login</button>
                </div>
    
                <hr className="my-4"></hr>
    
                <div className='d-grid gap-3'>
                <button className="btn btn-outline-danger googlebtn" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 20 20">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                
                &nbsp;Sign in with google &nbsp;</button>
                </div>

                <div className='mt-3' > Don't have an account? <a href="/signup"> Sign Up </a></div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}