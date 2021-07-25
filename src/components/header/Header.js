import React from "react"

function Header() {
  return (
    <>
      <header>
        <h1>Search Hacker News</h1>
        <form>
          <input type="text" placeholder="Search stories by title, url or author"></input>
          <input type="button"></input>
        </form>
      </header>
    </>
  )
}

export default Header
