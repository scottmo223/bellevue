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
            <nav id="main" className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger"/>
                <ul>
                    <li className="logo"><Link to={`/`}>Belle Vue</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/pricing`}>Pricing</Link></li>
                    <li><Link to={`/pictures`}>Pictures</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar