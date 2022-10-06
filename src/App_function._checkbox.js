import React, { useRef, useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState({})
  const [todolist, setTodolist] = useState([])
  const num = useRef(1) //id값을 ref를 써서 집어넣음 변경값을 계속 마운트 할 필요 없으니까
  const handlerInput = (e) => {
    const { name, value } = e.target
    setTodo({
      ...todo,
      [name]: value,
      id: num.current,
      done: false,
    })
    // setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleList = (e) => {
    if (todo.content.length < 5) {
      alert("내용은 5자 이상 쓰세요")
      return
    }
    setTodolist([...todolist, todo])
    setTodo({
      title: "",
      content: ""
    })

    num.current++
  }

  const deleteList = (el) => {
    setTodolist(todolist.filter(it => it.id !== el.id))
    num.current--
  }

  const handlerModify = (id) => {
    setTodolist(todolist.map(it => (
      it.id === id
        ? {
          ...it,
          done: !it.done
        }
        : it
    )))
  }

  return (
    <div>
      <ul>
        {
          todolist.map((el, idx) => {
            return (
              <li key={el.id} className={el.done ? "on" : ""}>
                <input type="checkbox" onChange={() => handlerModify(el.id)} />
                {el.id} 제목 : {el.title} <br></br> 내용 : {el.content}
                <button onClick={() => deleteList(el)}>삭제</button></li>
            )
          })
        }
      </ul>

      제목<input type="text" required onChange={handlerInput} name='title' value={todo.title || ""} />
      내용<input type="text" required onChange={handlerInput} name='content' value={todo.content || ""} />
      <button onClick={handleList}>입력</button>
    </div>
  )
}

export default App