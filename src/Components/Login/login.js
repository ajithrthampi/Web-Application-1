import React from 'react'
import './login.css'

function login() {
  return (
    <div>


<form class="form11">
  <div class="row">
  <h1 class="login123">Login</h1>
    <label for="email">Email</label>
    <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
  </div>
  <div class="row">
    <label for="password">Password</label>
    <input type="password" name="password"/>
  </div>
  <button type="submit">Login</button>
</form>
    </div>
  )
}

export default login