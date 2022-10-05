import React from 'react'

const TodoList = ({ list, setList }) => {

  const handlerRemove = (id) => {
    { setList(list.filter(e => e.id !== id)) }
  }

  return (
    <div>
      <h2>LIST</h2>
      <ul>
        {
          list.map((el, idx) => <li key={idx}> {el.id}.<br /> 제목 : {el.title} <br />내용 : {el.content}
            <button onClick={() => handlerRemove(el.id)}>DEL</button>

          </li>)
        }
      </ul>
    </div>

  )
}

export default TodoList