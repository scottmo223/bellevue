import React from 'react'
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../../content/assets/photo2.jpg"
import image2 from "../../content/assets/photo3.jpg"
import image3 from "../../content/assets/photo4.jpg"

class Pictures extends React.Component{
    render() {
        const images = [
            {
                original: image1,
                thumbnail: image1
            },
            {
                original: image2,
                thumbnail: image2
            },
            {
                original: image3,
                thumbnail: image3
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