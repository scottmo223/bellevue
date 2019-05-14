import React from 'react'

class AddOns extends React.Component{
    render() {
        const {children} = this.props
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                margin: "auto",
            }}>
                <h3 style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    margin: "auto",
                }}>{this.props.item} - $ {this.props.price}</h3>
                <div style={{
                    textAlign: "justify",
                    flex: "1 auto"
                }}>{children}</div>
            </div>
        )
    }
}

export default AddOns