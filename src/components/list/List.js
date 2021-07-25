import React from "react"

function List(props) {
  return (
    <li>
      <h5>{props.points}</h5>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </li>
  )
}

export default List
