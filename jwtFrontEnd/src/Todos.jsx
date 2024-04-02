import axios from 'axios'
import React from 'react'

const Todos = () => {

    const getTodos = async()=>{
        try{
            const result = await axios.get("http://localhost:7003/todos",{
                withCredentials:true
            })
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
            <h1>Todos</h1>
            <button onClick={getTodos} > GetTodos</button>
    </div>
  )
}

export default Todos
