import React from "react"

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
                <div className="" style={{margin: "auto 20px"}}>
                    <a
                        href="https://www.facebook.com/bellevue"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <span className="icon">
                        {/* <img src={linkedin} alt="LinkedIn" /> IMPORT AND ADD LOGO */}
                        FB
                    </span>
                    </a>
                </div>
                
                <div className="" style={{margin: "auto 20px"}}>
                    <a
                        href="https://www.instagram.com/bellevue"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <span className="icon">
                        {/* <img src={linkedin} alt="LinkedIn" /> IMPORT AND ADD LOGO */}
                        IG
                    </span>
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