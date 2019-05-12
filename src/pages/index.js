import React from "react"
import { graphql } from "gatsby"

import "../components/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
          <h1>Belle Vue Wedding Venue</h1>
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

        <div id='pricing' className='prices'>
          <h1 style={{
            background: `url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) 50%/100% no-repeat`,
            height: '24vw',
            lineHeight: '24vw'
          }}><div style={{
            backgroundColor: '#00000070'
          }}>Pricing</div></h1>
          <div>
            <h4>Wedding</h4>
            <h5>$2500 per event for up to 180 people.</h5>
            <ul>Included:
              <li>Tables and chairs</li>
              <li>Ice</li>
              <li>Use of the bar area</li>
              <li>Bride and groom’s rooms</li>
              <li>Use of the back porch and grounds</li>
            </ul>
            <p>You will have exclusive use of the venue for twelve hours. Please note that while our white garden chairs are included in this package, set up and tear down is the responsibility of the customer. Belle Vue will provide this service upon request.</p>
            <p>The following additions are available upon request:</p>
            <p>Full dinner service including round ivory dinner plates, round ivory cake plates, 16 oz water goblets, and silverware. This includes setting the table, clearing away, and cleaning. $500.</p>
            <p>Bartender services - we will hire a TABC certified bartender to serve your guests for up to four hours. All alcohol, cups, and bar napkins are to be provided by the customer. $200.</p>
            <p>While the use of our outdoor garden chairs are free, customers are responsible to set them up as they desire, and return them to their original position. Belle Vue will provide this service for $300.</p>
            <p>Facility cleaning charge: no fee if before the 12 hour usage time is up, the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
            <p>Any required time before the 12 hour time frame or after has a charge of $150 an hour.</p>
          </div>
          <div>
            <h4>Party Pricing</h4>
            <h5>Party pricing $750</h5>
            <p>Includes tables, chairs, hall area, bar area and back porch. 6 hours of usage time, 1 additional hour for clean up. Clean up is required by customer which includes no fee. 1 hour is given for cleaning time where the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
            <p>Any required time before the 6 hour time frame or after has a charge of $150 an hour.</p>
          </div>
        </div>
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
