import React from 'react'
import { useNavigate } from 'react-router-dom'

const Write = ({ input, inputContent, inputName, inputTitle, setInput, id, setBoardList, boardList }) => {
  const GO = useNavigate()

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id: id.current
    })
  }

  const submitInput = () => {
    setBoardList([
      ...boardList,
      input
    ])
    id.current++
    setInput(
      {
        name: "",
        title: "",
        content: ""
      }
    )
    GO('/board')
  }
  return (
    <div>
      <input ref={inputName} type="text" name='name' onChange={handleInput} value={input.name || ""} />
      <input ref={inputTitle} type="text" name='title' onChange={handleInput} value={input.title || ""} />
      <textarea ref={inputContent} type="text" name='content' onChange={handleInput} value={input.content || ""} />
      <button onClick={submitInput}>WRITE</button>
    </div>
  )
}

export default Write