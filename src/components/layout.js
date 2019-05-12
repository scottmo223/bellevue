import React from "react"
import Navbar from "../components/navbar"

class Layout extends React.Component {
  render() {
    const {children} = this.props
    
    return (
      <div>
        <header style={{
          background: `${this.props.headerImage} center/100% no-repeat`
        }}><h1 style={{fontWeight: '300'}}>{this.props.title}</h1></header>
        <Navbar/>
        <main style={{textAlign: 'center'}} className="">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://scottmorales.dev">Scott Morales</a>
        </footer>
      </div>
    )
  }
}

export default Layout
