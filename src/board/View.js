import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const View = ({ boardList, setBoardList }) => {
  const { id } = useParams()
  const matchContent = boardList.find((el) => String(el.id) === id)
  const GO = useNavigate()

  const deleteHandler = () => {
    const newList = boardList.filter((el) => String(el.id) !== matchContent.id)
    setBoardList(newList)

    GO('/board')
  }

  const modifyHandler = () => {
    GO('/modify/'+ id)
  }

  return (
    <div>
      <div>제목 :  {matchContent.title}</div>
      <div>작성자 : {matchContent.name}</div>
      <div>날짜 : {matchContent.date}</div>
      <div>내용 : {matchContent.content}</div>
      <button onClick={modifyHandler}>MODIFY</button>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  )
}

export default View