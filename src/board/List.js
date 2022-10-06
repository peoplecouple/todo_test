import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ boardList }) => {
  return (
    <div>
      <ul>
        {
          boardList.map((el, idx) =>
            <li key={el.id}>
              <div>{el.id}</div>
              <div>{el.name}</div>
              <div>{el.date}</div>
              <div>
                <Link to={'/view/' + el.id}>{el.title}</Link>
              </div>
              <div>{el.content}</div>
            </li>
          ).reverse()
        }
      </ul>
    </div>
  )
}

export default List