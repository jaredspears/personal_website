import React from "react"
import { navigate } from "gatsby"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }

    }
    render() {
        return <div>
            Hello Counter Component
            <h1>Counter</h1>
            <p>Current Count: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count -1})}>Minus</button>
            <button onClick={() => this.setState({ count: this.state.count +1})}>Plus</button>
            
            <h5><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/")}>Click this for Page 1</button></h5>
            </div>
    }
}

    

export default Counter





// export default function Home() {
//   return <div>

//     <h1>Welcome to the Counter Page</h1>
//     <p><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/")}>Click this for Page 1</button></p>
//     <p><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/page2")}>Click Back to Page 2</button></p>
//     <p><button style={{color:"white", backgroundColor:"green"}} onClick={() => navigate("/dir1/page3")}>Click Back to Page 3</button></p>
//   </div>
// }
