import React, { Component } from "react"
import Header from "@/components/pc/Header.js"
import Footer from "@/components/pc/Footer"
import { renderRoutes } from 'react-router-config'
import '@/assets/less/pc/home.less'
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
                    {
                        console.log(this.props.route)
                    }
                 {renderRoutes(this.props.route.routes, { someProp: "these extra props are optional" })}
                </div>
                <Footer/>
            </div>
        )
    }

}

export default PcContainer


