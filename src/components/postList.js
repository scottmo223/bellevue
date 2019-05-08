import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const PostList = () => (
  <StaticQuery 
    query = {postQuery}
    render = {data => {
      const posts = data.allMarkdownRemark.edges
      return (
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{marginBottom: rhythm(1 / 4),}}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt,}}/>
            </div>
          )
        })
      )
    }}
  />
)

  const postQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default PostList;