import React from 'react'
import './pricingItem.css'

class PricingItem extends React.Component {
    render () {
        const {children} = this.props
        return(
            <div className='main' style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
            }}>
              <div id="words" style={{
                  maxWidth: "600px", 
                  display: "flex",
                  flexDirection: "column",
                }}>
                <div>
                  <h2 style={{
                    margin: '0px',
                    fontSize: '50px'
                  }}>{this.props.item}</h2>
                  <h3 style={{
                    margin: '15px 0px 25px',
                    fontFamily: 'times new roman',
                    fontSize: '40px',
                  }}>$ {this.props.cost}</h3>
                </div>
                <div id="body">{children}</div>
              </div>

              <div id="picture" style={{
                background: `url(${this.props.picture}) 50%/100% no-repeat`,
                height: '250px',
                width: '430px',
                margin: "50px"
              }}></div>
            </div>
        )
    }
}

export default PricingItem