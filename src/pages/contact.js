import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle='Pagina de contacto' pageHeading='Titulo de la pagina de contacto'>
        <p>Texto de la pagina de contacto, ingresado como Children</p>
        </Layout>
  )
}
// Step 3: Export your component
export default ContactPage