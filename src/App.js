import { Component } from "react"
import axios from "axios"

import Header from "./components/header/Header"
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
        <Header />
        <List key={this.state.index} state={this.state} />
      </div>
    )
  }
}

export default App
