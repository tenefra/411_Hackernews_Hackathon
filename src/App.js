import { Component } from "react"
import axios from "axios"
import './App.css';

import Header from "./components/header/Header"
import List from "./components/list/List"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      searchText: ""
    }
  }

  searchChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  searchHandler = e => {
    e.preventDefault()
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.searchText}`).then(res => {
      const posts = res.data.hits
      this.setState({ posts })
    })

    this.setState({searchText: ''});
  }

  hideComment = e => {
    let stateArray = [...this.state.posts];
    stateArray.splice(e, 1);
    this.setState({posts : stateArray});
  }

  componentDidUpdate() {
    console.log(this.state.searchText)
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
        <Header state={this.state} searchChange={this.searchChange} searchHandler={this.searchHandler}/>
        <List state={this.state} hide={this.hideComment}/>
      </div>
    )
  }
}

export default App
