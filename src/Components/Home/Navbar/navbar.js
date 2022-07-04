import React from 'react'


function navbar() {
  return (
    <div>
         
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Auto Land</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            
            <div class="navbar-nav ms-auto">
                {/* <a href="#" class="nav-item nav-link">Login</a> */}
                <button type="button34" class="btn btn-primary px-5 mt-3 mb-3 ">login</button>
            </div>
        </div>
    </div>
</nav>

    </div>
  )
}

export default navbar