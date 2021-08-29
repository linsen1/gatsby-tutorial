import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getDate=graphql`
    {
      site {
        siteMetadata {
          author
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `
const ComponentName = () => {
  const {
    site:{
      siteMetadata:{title},
    },
  } = useStaticQuery(getDate);
  return (
    <div>
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default ComponentName
