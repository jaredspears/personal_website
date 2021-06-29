import React from "react"
//import { Link } from "gatsby-link"
import { navigate } from "gatsby"

export default function Home() {
  return <div>

    <h1>This is Page 2 of the Website of Jared Spears</h1>
    <h1><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/")}>Click this for Page 1</button></h1>
    <h1><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/dir1/page3")}>Click this for Page 3</button></h1>
  </div>
}
