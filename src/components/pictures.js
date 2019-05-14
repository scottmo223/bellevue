import React from 'react'
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"

class Pictures extends React.Component{
    render() {
        const images = [
            {
                original: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                thumbnail: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            },
            {
                original: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                thumbnail: "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            },
            {
                original: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            },
            {
                original: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            },
            {
                original: "https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
                thumbnail: "https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            },
        ]

        return(
            <ImageGallery 
                items={images}
                lazyLoad={true}
                showNav={false}
                useBrowserFullscreen={false}
                showBullets={true}
                slideDuration={1000}
            />
        )
    }
}

export default Pictures;