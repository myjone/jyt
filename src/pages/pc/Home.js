import React,{Component} from "react"
import '@/assets/less/pc/home.less'
import { Carousel } from 'antd';
class Home extends Component {
    constructor(){
        super()
        this.state = {

         }
    }
    render() {
        return (
            <div>
                <div className='banner'>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Home;