import React, { useRef, useState } from 'react'
import TodoList from './TodoList'
import TodoWrite from './TodoWrite'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {
  const [word, setWord] = useState({})
  //같은 값을 넣으면 state가 변경되지 않으니까 num이 변하지 않는다.
  const [list, setList] = useState([])
  const num = useRef(1)
  const inputTitle = useRef()
  const inputContent = useRef()

  const navi = useNavigate()

  const handlerWord = (e) => {
    const { name, value } = e.target;
    //비구조할당
    setWord({
      ...word,
      [name]: value,
      id: num.current
    })
  }

  const handleList = () => {

    if (!word.title || !word.content) {
      alert('내용을 입력하세요')
      return
    }


    const hg = /^[ㄱ-ㅎ가-힣]*$/

    if (!hg.test(word.title)) {
      alert('한글만 입력하세요')
      //1. 입력창을 비운다.
      setWord({
        ...word,
        title: ""
      })
      //2. 그 입력창에 포커스를 준다.
      inputTitle.current.focus()

      return
    }

    if (word.title.length < 5) {
      alert('5자 이상 쓰세요')
      //1. 입력창을 비운다.
      setWord({
        ...word,
        title: ""
      })
      // word.title = word.title.replace(word.title, "")
      //2. 그 입력창에 포커스를 준다.
      inputTitle.current.focus()

      return
    }

    if (word.content.length < 8) {
      alert('8자 이상 쓰세요')
      //1. 입력창을 비운다.
      setWord({
        ...word,
        content: ""
      })
      //2. 그 입력창에 포커스를 준다.
      inputContent.current.focus()

      return
    }

    setList([...list, word])
    // 원본 배열을 고치지말고  ...list로 카피해서 변경해서 불변성을 유지해야한다.
    setWord({
      title: "",
      content: ""
    })
    //setWord는 입력폼에 입력 후 안사라지는 정보들을 지워줌
    num.current++
    navi("/")
  }

  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Board'>Board</NavLink>
        <NavLink to='/Write'>Write</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList list={list} setList={setList} />} />
        <Route path="/Board" element={<TodoList list={list} setList={setList} />} />
        <Route path="/Write" element={<TodoWrite inputTitle={inputTitle} inputContent={inputContent} handlerWord={handlerWord} handleList={handleList} word={word} />} />
      </Routes>
    </div>
  )
}

export default App