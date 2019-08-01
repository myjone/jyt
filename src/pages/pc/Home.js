import React, { Component } from "react"
import '@/assets/less/pc/home.less'
import { Carousel, Button } from 'antd';
class Home extends Component {
    constructor() {
        super()
        this.state = {
            list: [1, 1, 1, 1, 1, 1]
        }
    }
    render() {
        return (
            <div>
                <div className='banner'>
                    <Carousel autoplay effect="fade">
                        <div>
                            <div className='banner_item'>
                                <div className="banner_item_info">
                                    <h1>易聚推</h1>
                                    <p>专注于商城的微商城</p>
                                    <div className="btnGroup">
                                        <Button type="primary" style={{ width: "180px", height: "52px", marginRight: "20px" }}>
                                            免费试用
                                    </Button>
                                        <Button type="primary" ghost type="primary" size='large' style={{ width: "180px", height: "52px" }}>
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
                                        <Button type="primary" style={{ width: "180px", height: "52px", marginRight: "20px" }}>
                                            免费试用
                                    </Button>
                                        <Button type="primary" ghost type="primary" size='large' style={{ width: "180px", height: "52px" }}>
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
                <div className='w1200'>
                    <ul className='advantages'>

                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li className='advantages-item' key={index}>
                                        <div className="image"></div>
                                        <p className="title">系统稳定</p>
                                        <p className='content'>7x24小时实时护航</p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className='product-items'>
                        <h1 className='title'>
                            易聚推 全行业全场景的电商解决方案
                        </h1>
                        <div className='product-item'>
                            <div className="image">

                            </div>
                            <div className="product-info wcard-left">
                                <ul>
                                    <li>
                                        <h2 className='item-title'> 3分钟搭建移动商城</h2>
                                        <h2 className='item-sub'>深挖行业特点 匹配产品功能，提供全行业解决方案</h2>
                                    </li>
                                    <li>
                                        <h2 className='item-title'> 近百种营销工具</h2>
                                        <h2 className='item-sub'>社群营销&节日营销，拉新、转化、复购面面俱到</h2>
                                    </li>
                                    <li>
                                        <h2 className='item-title'>
                                            系统化管理客户</h2>
                                        <h2 className='item-sub'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</h2>
                                    </li>
                                    <li>
                                        <h2 className='item-title'> 分销拓展销售渠道</h2>
                                        <h2 className='item-sub'>
                                            客户帮你卖，员工帮你卖，300万商家帮你卖</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;