import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home' pageHeading='Titulo de la pagina de inicio'><p>Texto de la pagina de inicio, ingresado como Children</p></Layout>
  )
}
// Step 3: Export your component
export default IndexPage