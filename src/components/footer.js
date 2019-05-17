import React from "react"
import facebook from "../../content/assets/f_logo_RGB-Black_512.png"
import instagram from "../../content/assets/glyph-logo_May2016.png"

class Footer extends React.Component {
    render(){
        return(
        <footer>
            <hr style={{marginTop: "50px"}} />
            <h1 style={{
                background: "#00000070", 
                height: '24vw',
                lineHeight: '24vw', 
                textAlign: "center"
            }}>
                Connect with us!
            </h1>
            <h4 style={{
                width: "80vw", 
                margin: "40px auto", 
                textAlign: "center",
                fontWeight: "500",
                fontSize: "0.8rem"
            }}>
                The best way to get your questions answered
            </h4>
            
            <div style={{display: "flex", justifyContent: "center", marginBottom: "120px"}}>
                <div className="icon" style={{margin: "auto 20px"}}>
                    <a
                        href="https://www.facebook.com/bellevue.tyler/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
                
                <div className="icon" style={{margin: "auto 20px"}}>
                    <a
                        href="https://www.instagram.com/bellevuetyler/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div>
                12345 SH 110 <br />
                Tyler, TX 75702
            </div>

            <div style={{textAlign: "center", marginTop: "40px"}}> 
                © {new Date().getFullYear()}, Built by
                {` `}
                <a href="https://scottmorales.dev">Scott Morales</a>
            </div>
        </footer>
        )
    }
}

export default Footer