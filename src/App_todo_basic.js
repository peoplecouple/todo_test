import { useState } from "react";

function App() {
  const [input, setInput] = useState()
  const [list, setList] = useState([])
  console.log(list)
  return (
 
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      <ul>
        {
          list.map((el, idx) => {
            return (
              <li key={idx}>{el} <button onClick={() => { setList(list.filter(it => it !== el)) }}>삭제하기</button></li>

            )
          })
        }
      </ul>

      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => setList([...list, input])}>입력</button>
    </div>
  );
}

export default App;
