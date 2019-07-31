import React, { Component } from "react"
import Header from "@/components/pc/Header.js"
import { Route } from "react-router-dom"
import Home from "@/pages/pc/Home.js"
import About from "@/pages/pc/About.js"
class PcContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Header/>
                <div className="container">
                    <Route path='/home' exact component={Home} />
                    <Route path='/about' component={About} />
                </div>
            </div>
        )
    }

}

export default PcContainer