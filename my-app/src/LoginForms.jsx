import React, { useState } from 'react'

function LoginForms() {
    const [name, setName]=useState()
    const [password, setPassword]=useState()
    const clicked= ()=>{
        setName(name)
        setPassword(password)
        console.log("clicked");
        alert("submit successfully");
    }
  return (
    <>
    <div>
      <form>
        <h1>Fill form</h1>
      <input type='text' placeholder='Enter the name' onChange={name} value={name}></input>
      <br/>
      <input type='text' placeholder='Enter the password' onChange={password} value={password}></input>
      <br/>
      <button onClick={clicked}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default LoginForms
