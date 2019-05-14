import React from 'react'

class PictureHeading extends React.Component {
    render(){
        return(
            <h1 style={{
                background: `url(${this.props.imageUrl}) 50%/100% no-repeat`,
                height: '24vw',
                lineHeight: '24vw'
              }}><div style={{
                backgroundColor: '#00000070'
              }}>{this.props.title}</div></h1>
        )
    }
}

export default PictureHeading