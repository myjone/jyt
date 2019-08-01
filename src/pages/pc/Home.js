import React, { Component } from "react"
import '@/assets/less/pc/home.less'
import { Carousel, Button } from 'antd';
class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className='banner'>
                    <Carousel  autoplay effect="fade">
                        <div>
                            <div className='banner_item'>
                                <div className="banner_item_info">
                                    <h1>易聚推</h1>
                                    <p>专注于商城的微商城</p>
                                    <div className="btnGroup">
                                     <Button type="primary"  style={{width:"180px",height:"52px",marginRight:"20px"}}>
                                            免费试用
                                    </Button>
                                        <Button type="primary" ghost  type="primary" size='large' style={{width:"180px",height:"52px"}}>
                                            了解更多
                                        </Button>
                                    </div>
                                </div>
                                <div className='banner_item_image'>
                                    <img
                                        src="http://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/e55a90f2d8669ff8b1070533086f57df.png"
                                        alt=""
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='banner_item'>
                            <div className="banner_item_info">
                                    <h1>易聚推</h1>
                                    <p>专注于商城的微商城</p>
                                    <div className="btnGroup">
                                     <Button type="primary"  style={{width:"180px",height:"52px",marginRight:"20px"}}>
                                            免费试用
                                    </Button>
                                        <Button type="primary" ghost  type="primary" size='large' style={{width:"180px",height:"52px"}}>
                                            了解更多
                                        </Button>
                                    </div>
                                </div>
                                <div className='banner_item_image'>
                                    <img
                                        src="http://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/e55a90f2d8669ff8b1070533086f57df.png"
                                        alt=""
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Home;