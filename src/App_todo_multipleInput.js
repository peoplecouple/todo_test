import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState({
  })


  const [todolist, setTodolist] = useState([])

  return (


    <div>
      <ul>
        {
          todolist.map((el, idx) => {
            return (
              <li key={idx}>제목 : {el.title} <br></br> 내용 : {el.content}</li>
            )
          })
        }
      </ul>

      제목<input type="text" required onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} name='title' />
      내용<input type="text" required onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} name='content' />
      <button onClick={() => { setTodolist([...todolist, todo]) }}>입력</button>
    </div>

  )
}

export default App