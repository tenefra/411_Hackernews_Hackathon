import { Component } from "react"
import axios from "axios"

import List from "./components/list/List"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  searchHandler(e) {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`).then(res => {
      const posts = res.data.hits
      console.log(posts)
      this.setState({ posts })
    })
  }

  componentDidMount() {
    axios.get("http://hn.algolia.com/api/v1/search?tags=front_page").then(res => {
      const posts = res.data.hits
      console.log(posts)
      this.setState({ posts })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map((post, index) => {
            return (
              <>
                <List key={index} title={post.title} author={post.author} points={post.points} />
              </>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
