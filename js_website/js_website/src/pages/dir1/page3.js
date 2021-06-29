import React from "react"
//import { Link } from "gatsby-link"
import { navigate } from "gatsby"

export default function Home() {
  return <div>

    <h1>This is Page 3 of the Website of Jared Spears</h1>
    <p><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/")}>Click this for Page 1</button></p>
    <p><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/page2")}>Click Back to Page 2</button></p>
  </div>
}
