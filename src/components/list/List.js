import React from "react"
import Item from "../item/Item"

function List(props) {
  return (
    <ul>
      {props.state.posts.map((post, index) => {
        return (
          <>
            <Item key={props.key} title={post.title} author={post.author} points={post.points} />
          </>
        )
      })}
    </ul>
  )
}

export default List
