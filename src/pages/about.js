// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='Pagina ABOUT' pageHeading='Titulo de la pagina about'>
    <p>Texto de la pagina about, ingresado como Children</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage