import React, { Component } from "react"
import { Carousel, Button } from 'antd';
import { Icon } from 'antd';
import weixin from "@/assets/images/icon/weixin.png"
import weibo from "@/assets/images/icon/weibo.png"
import douyin from "@/assets/images/icon/douyin.png"
import runwen from "@/assets/images/icon/runwen.png"
import Commanbar from '@/components/pc/CommanBar';
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
                            <div className="product-info wcard-right">
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
                                    <li className='btnInlineGroup'>
                                        <Button type="primary"  className='bigLarge'>
                                            免费试用
                                         </Button>
                                        <Button type="primary" ghost type="primary" className='bigLarge'>
                                            了解更多
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                <div className='wFull bgF7FBFF'>
                    <div className='product-items'>
                        <h1 className='title'>
                            易聚推 一分钟让您拥有自己的店铺
                        </h1>
                        <div className='product-item'>
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
                                    <li className='btnInlineGroup'>
                                        <Button type="primary" className='bigLarge'>
                                            免费试用
                                         </Button>
                                        <Button type="primary" ghost type="primary" className='bigLarge'>
                                            了解更多
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <div className="image">

                            </div>
                        </div>
                    </div>
                    </div> 
                    
                    <div className='w1200'>
                    <div className='product-items'>
                        <h1 className='title'>
                            易聚推 一分钟让您拥有自己的店铺
                        </h1>
                        <div className='product-item'>
                            <div className="image">

                            </div>
                            <div className="product-info wcard-right">
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
                                    <li className='btnInlineGroup'>
                                        <Button type="primary" className='bigLarge'>
                                            免费试用
                                         </Button>
                                        <Button type="primary" ghost type="primary" className='bigLarge'>
                                            了解更多
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
                    
                <div className='wFull bgF7FBFF'>
                    <div className='product-items'>
                        <h1 className='title'>
                            易聚推 一分钟让您拥有自己的店铺
                        </h1>
                        <div className='product-item'>
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
                                    <li className='btnInlineGroup'>
                                        <Button type="primary" className='bigLarge'>
                                            免费试用
                                         </Button>
                                        <Button type="primary" ghost type="primary" className='bigLarge'>
                                            了解更多
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <div className="image">

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w1200'>
                    <div className='product-items'>
                        <h1 className='title'>
                           为更多行业和场景提供解决方案
                        </h1>
                        <div className='product-item'>
                            <ul className='flex-wrap'> 
                                <li className='solution-item'>
                                        <div className="img">

                                        </div>
                                    <div className='solution-info'>
                                        <div className='sICON'>
                                            <Icon type="caret-up" />
                                        </div>
                                        <p className="stitle">标题标题标题标题</p>
                                        <p className='scontent'>
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                               文字的内容文字的内容文字的内容
                                                文字的内容文字的内容文字的内容
                                                 文字的内容文字的内容文字的内容
                                                  文字的内容文字的内容文字的内容
                                        </p>
                                    </div>
                                </li>
                                <li className='solution-item'>
                                    <div className="img">

                                    </div>
                                    <div className='solution-info'>
                                        <div className='sICON'>
                                            <Icon type="caret-up" />
                                        </div>
                                        <p className="stitle">标题标题标题标题</p>
                                        <p className='scontent'>
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                               文字的内容文字的内容文字的内容
                                                文字的内容文字的内容文字的内容
                                                 文字的内容文字的内容文字的内容
                                                  文字的内容文字的内容文字的内容
                                        </p>
                                    </div>
                                </li>
                                <li className='solution-item'>
                                    <div className="img">
                                       
                                    </div>
                                    <div className='solution-info'>
                                        <div className='sICON'>
                                            <Icon type="caret-up" />
                                        </div>
                                        <p className="stitle">标题标题标题标题</p>
                                        <p className='scontent'>
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                               文字的内容文字的内容文字的内容
                                                文字的内容文字的内容文字的内容
                                                 文字的内容文字的内容文字的内容
                                                  文字的内容文字的内容文字的内容
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w1200'>
                    <div className='product-items'>
                        <h1 className='title'>
                           多渠道推广  流量变现快速高效
                        </h1>
                        <div className='product-item'>
                            <ul className='flex-wrap'>
                                <li className='multi-item'>
                                   <div className="mask">
                                            <div className="img">
                                                <img src={weixin} alt="" style={{width:'100%'}}/>
                                            </div>
                                        <h3>微信</h3>
                                        <p>可在自有公众号中创建知识店铺</p>
                                        <p>充分挖掘微信社交裂变传播势能</p>
                                   </div>
                                </li>
                                <li className='multi-item'>
                                    <div className="mask">
                                        <div className="img">
                                            <img src={weibo} alt="" style={{ width: '100%' }} />
                                        </div>
                                        <h3>微博</h3>
                                        <p>可在自有公众号中创建知识店铺</p>
                                        <p>充分挖掘微信社交裂变传播势能</p>
                                    </div>
                                </li>
                                <li className='multi-item'>
                                    <div className="mask">
                                        <div className="img">
                                            <img src={douyin} alt="" style={{ width: '100%' }} />
                                        </div>
                                        <h3>抖音</h3>
                                        <p>可在自有公众号中创建知识店铺</p>
                                        <p>充分挖掘微信社交裂变传播势能</p>
                                    </div>
                                </li>
                                <li className='multi-item'>
                                    <div className="mask">
                                        <div className="img">
                                            <img src={runwen} alt="" style={{ width: '100%' }} />
                                        </div>
                                        <h3>软文</h3>
                                        <p>可在自有公众号中创建知识店铺</p>
                                        <p>充分挖掘微信社交裂变传播势能</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               <Commanbar/>
            </div>
        );
    }
}

export default Home;