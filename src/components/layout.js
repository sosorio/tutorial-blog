// Step 1: Import React
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import {container, heading, navLinks, navLinkItem, navLinkText, siteTitle} from './layout.module.css'
import Footer from './Footer';
import Navbar from './Navbar';

// Step 2: Define your component


const Layout  = ({pageTitle,pageHeading,children}) => {
    const data = useStaticQuery(graphql`
    query {
        site(siteMetadata: {title: {}}) {
          siteMetadata {
            title
          }
        }
      }`);
      //console.log(data)
  return (
    <container>
    <Navbar/>
    <main className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                <li className={navLinkItem}><Link className={navLinkText} to="/contact">Contact</Link></li>
                <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
    </main>
    <Footer/>
    </container>
  )
}
// Step 3: Export your component
export default Layout