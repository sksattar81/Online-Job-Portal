import React from 'react'

const Loginpage = () => {
  return (
    <div>
    <div>
        <h1>FindJob</h1>
    </div>
      <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'> </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form'>
                            <h6>WELCOME Dear for Log in </h6><hr></hr>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Username or email  <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="email"
                                                name="name"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder='Enter Your First Name'
                                            />
                                        </div>
                                    </div>

                                    
                                    </div><div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword" class="form-label">Password  <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="password"
                                                name="password"
                                                class="form-control"
                                                id="exampleInputPassword"
                                                aria-describedby="Help"
                                                placeholder="Enter the  Password "
                                            />
                                        </div>
                                    </div>
                                
                                <div className='row'>
                                    <div className='col-12'>
                                        <div style={{ display: 'block', float: 'right' }}>
                                            <button type="button" class="btn btn-success">Log In Your account </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="Footers"> Don't have an account  ? <a href="">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Loginpage
