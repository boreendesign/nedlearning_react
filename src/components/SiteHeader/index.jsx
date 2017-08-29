import React from 'react'
import Link from 'gatsby-link'
import SiteNavi from '../SiteNavi'

class Header extends React.Component {
  render() {
    const { location, title, siteMetadata } = this.props
    return (
      <div id="header-wrapper">
        <div id="header">        
          <h1>
            <a href="http://nedlearning.com/" id="logo"></a>
            <div className="slogan">Neuroscience, Education, and Adaptive Expertise in Your <span className="highlighted">Classroom</span></div>
          </h1>
          <SiteNavi title={title} {...this.props} />
          <section id="banner" className="row">
          </section>
        </div>
      </div>
    )
}

}



export default Header
