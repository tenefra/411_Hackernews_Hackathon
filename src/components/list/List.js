import React from "react"
import Item from "../item/Item"

function List(props) {
  return (
    <ol>
      {props.state.posts.map((post, index) => {
        return (
          <>
            <Item hide={props.hide} key={index} title={post.title} author={post.author} points={post.points} url={post.url} index={index} story={post.objectID} comments={post.num_comments}/>
          </>
        )
      })}
    </ol>
  )
}

export default List
