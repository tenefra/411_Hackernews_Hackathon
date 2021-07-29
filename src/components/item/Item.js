import React from "react"

function Item(props) {
  let authorUrl =  `https://news.ycombinator.com/user?id=${props.author}`;
  let commentURL = `https://news.ycombinator.com/item?id=${props.story}`;

  return (
    <li id="item">
      <a href={props.url}>{props.title}</a>
      <div>
        <p>{props.points} points by <a href={authorUrl}>{props.author}</a> | <span id="hide" onClick={() => {props.hide(props.index)}}>hide</span> | <a href={commentURL}>{props.comments} comments</a></p>
        
        
      </div>
      
      
    </li>
  )
}

export default Item
