import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const doLogin = async()=>{
        try{
                const data = await axios.post('http://localhost:7003/user/login',{userName,password},{
                    withCredentials:true
                })
                const {token} = data.data
                if(token){
                    localStorage.setItem('token',token)
                }
        }catch(err){
            console.log(err,"this is the error occured in login")
        }
    }

  return (
    <div>
        <input onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder='userName' type="text" />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password' type="text" />
        <button onClick={doLogin}>Login</button>
    </div>
  )
}

export default Login
