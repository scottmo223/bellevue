import React from "react"
import Navbar from "../components/navbar"

class Layout extends React.Component {
  render() {
    const {children} = this.props
    
    return (
      <div>
        <header style={{
          background: `${this.props.headerImage} center/100% no-repeat`
        }}><h1>{this.props.title}</h1></header>
        <Navbar/>
        <main className="">{children}</main>
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
