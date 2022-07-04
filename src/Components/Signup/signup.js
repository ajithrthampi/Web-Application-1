import React from 'react'
import './signup.css'

function signup() {
    return (
        <div >

<div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card1 px-1 py-4">
        <div class="card-body">
            <h1 class="card-title mb-3">Sign Up</h1>
            {/* <div class="d-flex flex-row"> <label class="radio mr-1"/> <input type="radio" name="add" value="anz" checked/> <span> <i class="fa fa-user"></i> Anz CMK </span> <label/> <label class="radio"> <input type="radio" name="add" value="add"/> <span> <i class="fa fa-plus-circle"></i> Add </span> </label> </div>
            <h6 class="information mt-4">Please provide following information about Anz CMK</h6> */}
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        {/* <!-- <label for="name">Name</label> -->  */}
                        <input class="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="password" placeholder="Enter your password"/> </div>
                    </div>
                </div>
            </div>



            <div class=" call3 d-flex flex-column text-center px-5 mt-3 mb-3">  </div> <button class="btn btn-primary btn-block confirm-button">Sign Up</button>
        </div>
    </div>
</div>

        </div>
    )
}

export default signup