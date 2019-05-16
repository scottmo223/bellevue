import React from "react"

class Footer extends React.Component {
    render(){
        return(
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://scottmorales.dev">Scott Morales</a>
        </footer>
        )
    }
}

export default Footer