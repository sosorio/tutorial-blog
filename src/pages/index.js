import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home' pageHeading='Titulo de la pagina de inicio'>
      <p>Texto de la pagina de inicio, ingresado como Children</p>
    <StaticImage src="../images/cala.jpg"
     alt="A cala" />
     <StaticImage src="https://img.freepik.com/vector-premium/rosa-roja-hojas_23-2147502749.jpg"
     alt="A rose" />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage