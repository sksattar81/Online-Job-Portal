import React from "react";

function Registerpage() {
    return (
        <><div className="header">
            <h1>FindJob</h1>
        </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'> </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form'>
                            <h6>Create an Account  </h6><hr></hr>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">First Name <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder='Enter Your First Name'
                                            />
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label"> Last Name <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder='Enter Your Last  Name'
                                            />
                                        </div>
                                    </div>



                                    <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="email"
                                                name="email"
                                                class="form-control"
                                                id="exampleInputEmail1"

                                                placeholder='Enter Your Email'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword" class="form-label">Password  <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="password"
                                                name="password"
                                                class="form-control"
                                                id="exampleInputPassword"
                                                aria-describedby="Help"
                                                placeholder="Enter a new strong Password "
                                            />
                                        </div>
                                    </div><div className='col-lg-12 col-md-12 col-sm-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword" class="form-label">Re-enter Password  <sup><span style={{ color: 'red' }}>*</span></sup></label>
                                            <input
                                                type="password"
                                                name="password"
                                                class="form-control"
                                                id="exampleInputPassword"
                                                aria-describedby="Help"
                                                placeholder="re-Enter your Strong  Password "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div style={{ display: 'block', float: 'right' }}>
                                            <button type="button" class="btn btn-success">Register an account </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="Footers"> Already a member of FindJob ? <a href="">Log In</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registerpage;