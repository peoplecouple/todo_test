import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Modify = ({ boardList, setBoardList }) => {

  const GO = useNavigate()
  const { id } = useParams()
  const matchContent = boardList.find((el) => String(el.id) === id)
  const modifyInput = () => {
    const modify = boardList.map(el =>
      String(el.id) === id ?
        {
          ...input,
          name: input.name,
          title: input.title,
          content: input.content,
        }
        : el
    )

    setBoardList(modify)
    GO('/view/' + id)
  }

  const [input, setInput] = useState({
    name: matchContent.name,
    title: matchContent.title,
    content: matchContent.content

  })

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id: id
    })
  }

  return (
    <div>
      <input type="text" name='name' onChange={handleInput} value={input.name} />
      <input type="text" name='title' onChange={handleInput} value={input.title} />
      <textarea type="text" name='content' onChange={handleInput} value={input.content} />
      <button onClick={modifyInput}>MODIFY</button>
    </div>
  )
}

export default Modify