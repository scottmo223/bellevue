import React from "react"
//import { Link } from "gatsby"

import Navbar from "../components/navbar"

class Layout extends React.Component {
  render() {
    const {children} = this.props
    
    return (
      <div>
        <header><h1>Belle Vue</h1></header>
      <Navbar/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
