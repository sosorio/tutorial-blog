import * as React from 'react'
import {Link} from 'gatsby'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Link to='/about'>About</Link><h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
    </main>
  )
}
// Step 3: Export your component
export default IndexPage