import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
            <nav id="main" className={this.state.scroll > this.state.top ? "fixed-nav" : ""} style={{width: "100%"}}>
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger"/>
                <ul>
                    <li className="logo"><Link to={`/`}>Belle Vue</Link></li>
                    <li><a href='#detail'>About</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#picture'>Pictures</a></li>
                </ul>
                <div className="placeholder" />
            </nav>
        )
    }
}

export default Navbar