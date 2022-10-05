import React from 'react'

const TodoWrite = ({inputTitle, inputContent, handlerWord, handleList, word}) => {
  return (
    <div>
      <div><input ref={inputTitle} type="text" onChange={handlerWord} name='title' value={word.title || ""} /></div>
      {/* 객체에서  key값 받아올 때 {key : word} word['']이렇게 받아올수 있었으므로 e.target.name에 대괄호가 싸인다. */}
      <div><input ref={inputContent} type="text" onChange={handlerWord} name='content' value={word.content || ""} /></div>

      <div>
        <button onClick={handleList}>WRITE</button>
      </div>

    </div>
  )
}

export default TodoWrite