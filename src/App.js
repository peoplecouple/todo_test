import React, { useRef, useState } from 'react'
import List from './board/List'
import Write from './board/Write'
import View from './board/View'
import Modify from './board/Modify'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {
  const [input, setInput] = useState({})
  const [boardList, setBoardList] = useState([])
  const id = useRef(1)
  const inputName = useRef()
  const inputTitle = useRef()
  const inputContent = useRef()

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/board'>board</NavLink></li>
            <li><NavLink to='/write'>write</NavLink></li>
          </ul>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<List boardList={boardList} />} />
        <Route path="/board" element={<List boardList={boardList} />} />
        <Route path="/view/:id" element={<View setBoardList={setBoardList} boardList={boardList} />} />
        <Route path="/modify/:id" element={<Modify setBoardList={setBoardList} boardList={boardList} />} />
        <Route path="/write" element={<Write inputName={inputName} inputContent={inputContent} inputTitle={inputTitle} input={input} setInput={setInput} id={id} setBoardList={setBoardList} boardList={boardList} />} />
      </Routes>



    </div>
  )
}

export default App

// const bj = {
//   name = 'xxx'
// }
// bj라는 객체속의 name값을 바꾸려면 
// bj.name = 'vvv' 이렇게 말고 
// bj['name'] = 'vvv' 이렇게 해야함