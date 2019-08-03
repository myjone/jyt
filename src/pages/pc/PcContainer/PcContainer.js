import React, { Component } from "react"
import Header from "@/components/pc/Header.js"
import Footer from "@/components/pc/Footer"
import { renderRoutes } from 'react-router-config'
import '@/assets/less/pc/home.less'
import { MediaQuery } from 'react-responsive'
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
                <MediaQuery query="(min-device-width: 768px)">
                     <Header/>
                </MediaQuery>
                <div className="container" style={{paddingTop:"70px;"}}>
                    {
                        console.log(this.props.route)
                    }
                 {renderRoutes(this.props.route.routes, { someProp: "these extra props are optional" })}
                </div>
                <MediaQuery query="(min-device-width: 768px)">
                     <Footer/>
                </MediaQuery>
            </div>
        )
    }

}

export default PcContainer


