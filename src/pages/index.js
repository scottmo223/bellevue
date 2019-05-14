import React from "react"
import { graphql } from "gatsby"

import "../components/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pictures from "../components/pictures"
import Pricing from "../components/pricing"
import PictureHeading from "../components/pictureHeading";

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    
    return (
      <Layout location={this.props.location} title={siteTitle} headerImage={`url(${this.props.data.photo1.childImageSharp.fluid.src})`}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div id='about' className='about'>
        <PictureHeading 
          title="Venue at Belle Vue" 
          imageUrl="" 
        />
          <p>Belle Vue is a beautiful venue for your wedding/special event needs. Spectacular mature wooded views and a gorgeous, modern building as the perfect canvas!</p>
          <div className='quote'>
            <h4>James Avery</h4>
            <p>"I love this place. It's like a home, but better"</p>
          </div>
          <div className='quote'>
            <h4>James Avery</h4>
            <p>"I love this place. It's like a home, but better"</p>
          </div>
        </div>
        
        <div id='picture' style={{
          maxWidth: "55vw",
          margin: "0 auto",
        }}>
          <Pictures />
        </div>

        <div id='detail' className='details'>
          <PictureHeading title="About Belle Vue" imageUrl="https://images.unsplash.com/2/04.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          <p style={{textAlign: 'justify', width: '70vw', margin: "40px auto 120px"}}>Detail details details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ante lorem. Vivamus nisi eros, pulvinar ac malesuada id, iaculis quis ipsum. Phasellus sapien massa, congue eget nisl at, commodo faucibus nisl. Cras laoreet sapien id vestibulum ullamcorper. Donec vel tellus id est pharetra tempor. In finibus nec ipsum at consequat. Curabitur pellentesque nisi sodales, volutpat erat et, tempus ex. Fusce ut felis mauris. Integer accumsan mollis purus a dictum. Sed vel augue risus. Nunc nisi ipsum, laoreet non quam vel, hendrerit tincidunt turpis. Curabitur non mi auctor, sodales augue sed, luctus mi. Morbi volutpat enim placerat arcu convallis, at commodo tortor iaculis. Nulla scelerisque ex dui. Quisque dapibus euismod molestie.</p>
        </div>

        <Pricing />

      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    photo1: file(relativePath: {eq: "photo1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1900 quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`
