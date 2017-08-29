import React from 'react'
import Link from 'gatsby-link'


class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar affix-top" id="nav">
      <ul>
      <li className="current" ><a href="index.html">Home</a></li>
      <li ><a href="#journey">Journey</a></li>
      <li ><a href="#principles">Principles</a></li>
      <li ><a href="#team">Team</a></li>
      <li ><a target="_blank" href="http://blog.nedlearning.com">Blog</a></li>
      <li ><a href="#contact">Contact</a></li>
      </ul>
      </nav>
    )
  }
}


export default SiteNavi
