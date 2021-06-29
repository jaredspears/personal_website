import React from "react"
import { navigate } from "gatsby"
import Counter from "./counter"

export default function Home() {
  return <div>

    <h1>This is the Website of Jared Spears</h1>
    <h1><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/page2")}>Click this for Page 2</button></h1>
    <h1><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/dir1/page3")}>Click this for Page 3</button></h1>
    <h1><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/counter")}>Counter</button></h1>
    {/* <Counter /> */}
  </div>
}
