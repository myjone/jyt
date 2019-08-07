import React, { Component } from "react"
import { Carousel, Button } from 'antd';
import { Icon } from 'antd';
import weixin from "@/assets/images/icon/weixin.png"
import weibo from "@/assets/images/icon/weibo.png"
import douyin from "@/assets/images/icon/douyin.png"
import runwen from "@/assets/images/icon/runwen.png"
import Commanbar from '@/components/pc/CommanBar';
import ruanwen from "@/assets/images/icon/ruanwen.png"
import dingzhi from "@/assets/images/icon/dingzhi.png"
import shangcheng from "@/assets/images/icon/shangcheng.png"
import xianshangxianxia from "@/assets/images/icon/xianshangxianxia.png"
import { Row, Col } from "antd"
import "@/assets/less/pc/header.less"
import "@/assets/less/pc/home.less"
import Footer from "@/components/pc/Footer"
class Home extends Component {
    constructor() {
        super()
        this.state = {
            list: [1, 1, 1, 1, 1, 1],
            anchorActive: '',
        }
    }

    componentDidMount(){
        this.renderMap()
    }
    //地图展示
    renderMap = () =>{
        this.map=new window.BMap.Map("orderDetailMap"); //初始化地图，这个id和下面的id相对应，之所以将初始化的地图放到this对象上，是方便其他方法调用map对象
        this.map.centerAndZoom('成都市双流区西航港蓝光空港国际城', 10);
    }

    handleScrollToAnchor = (anchorName) => {
        if (anchorName) {
            this.setState({
                anchorActive: anchorName
            })
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    }
    render() {
        return (
            <div>
                <div className='nav BlueNav'>
                    <div className="nav_Content">
                        <div className="nav_Content_logo">

                        </div>
                        <ul className="nav_Content_navbar">
                            
                           
                            <li>
                            定价
                            </li>
                            {/* <li>
                                <NavLink to="/example" activeClassName={'active'}>案例</NavLink>
                                <a href="">
                                    案例
                                </a>
                            </li> */}
                            <li>
                            渠道合作
                            </li>
                            <li onClick={this.handleScrollToAnchor.bind(this, "about")} 
                            className={
                                this.state.anchorActive=="about"?'active':null
                            }>
                                关于我们
                            </li>
                        </ul>
                        {/* <div className="nav_Content_btnGroup">
                            <Button type="link">
                                <NavLink to="/login" activeClassName={'active'}>登录</NavLink>
                            </Button>
                            <Button type="primary" shape="round">
                                注册
                           </Button>
                        </div> */}
                    </div>
                </div>

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
                </div>
                <div className='w1200 pdt80 pdb30'>
                    <h1 className='textFontSize32 textCenter mgb50'>
                        易聚推 全行业全场景的电商解决方案
                        </h1>
                    <Row>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <div className="himage">

                            </div>
                        </Col>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <ul className='pdl73'>
                                <li className='textLeft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'> 3分钟搭建移动商城</h2>
                                    <p className='textFontSize16'>深挖行业特点 匹配产品功能，提供全行业解决方案</p>
                                </li>
                                <li className='textLineHeight30 textLeft textColor333 mgb30'>
                                    <h2 className='textFontSize18'> 近百种营销工具</h2>
                                    <p className='textFontSize16'>社群营销&节日营销，拉新、转化、复购面面俱到</p>
                                </li>
                                <li className='textleft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'>
                                        系统化管理客户</h2>
                                    <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
                                </li>
                                <li className='textleft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'>
                                        系统化管理客户</h2>
                                    <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
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
                        </Col>
                    </Row>
                </div>

                <div className='wFull bgF7FBFF pdt80 pdb30'>
                    <div className='w1200'>
                        <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                            易聚推 全行业全场景的电商解决方案
                        </h1>
                        <Row>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <ul>
                                    <li className='textLeft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'> 3分钟搭建移动商城</h2>
                                        <p className='textFontSize16'>深挖行业特点 匹配产品功能，提供全行业解决方案</p>
                                    </li>
                                    <li className='textLineHeight30 textLeft textColor333 mgb30'>
                                        <h2 className='textFontSize18'> 近百种营销工具</h2>
                                        <p className='textFontSize16'>社群营销&节日营销，拉新、转化、复购面面俱到</p>
                                    </li>
                                    <li className='textleft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'>
                                            系统化管理客户</h2>
                                        <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
                                    </li>
                                    <li className='textleft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'>
                                            系统化管理客户</h2>
                                        <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
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
                            </Col>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <div className="himage">

                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className='w1200 pdt80 pdb30'>
                    <h1 className='textFontSize32 textCenter mgb50'>
                        易聚推 全行业全场景的电商解决方案
                        </h1>
                    <Row>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <div className="himage">

                            </div>
                        </Col>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <ul className='pdl73'>
                                <li className='textLeft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'> 3分钟搭建移动商城</h2>
                                    <p className='textFontSize16'>深挖行业特点 匹配产品功能，提供全行业解决方案</p>
                                </li>
                                <li className='textLineHeight30 textLeft textColor333 mgb30'>
                                    <h2 className='textFontSize18'> 近百种营销工具</h2>
                                    <p className='textFontSize16'>社群营销&节日营销，拉新、转化、复购面面俱到</p>
                                </li>
                                <li className='textleft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'>
                                        系统化管理客户</h2>
                                    <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
                                </li>
                                <li className='textleft textLineHeight30 textColor333 mgb30'>
                                    <h2 className='textFontSize18'>
                                        系统化管理客户</h2>
                                    <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
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
                        </Col>
                    </Row>
                </div>
                <div className='wFull bgF7FBFF pdt80 pdb30'>
                    <div className='w1200'>
                        <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                            易聚推 全行业全场景的电商解决方案
                        </h1>
                        <Row>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <ul>
                                    <li className='textLeft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'> 3分钟搭建移动商城</h2>
                                        <p className='textFontSize16'>深挖行业特点 匹配产品功能，提供全行业解决方案</p>
                                    </li>
                                    <li className='textLineHeight30 textLeft textColor333 mgb30'>
                                        <h2 className='textFontSize18'> 近百种营销工具</h2>
                                        <p className='textFontSize16'>社群营销&节日营销，拉新、转化、复购面面俱到</p>
                                    </li>
                                    <li className='textleft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'>
                                            系统化管理客户</h2>
                                        <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
                                    </li>
                                    <li className='textleft textLineHeight30 textColor333 mgb30'>
                                        <h2 className='textFontSize18'>
                                            系统化管理客户</h2>
                                        <p className='textFontSize16'>客户画像帮您了解客户，会员卡/储值卡实现精准营销</p>
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
                            </Col>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <div className="himage">

                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='w1200 pdt80'>
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        易聚推 全行业全场景的电商解决方案
                        </h1>

                    <Row>
                        <Col span={8}>
                            <div className='specilItem3 mga boxShowdow radius5 hoverBoxScale'>
                                <div className="img">

                                </div>
                                <div className='pd20 pRealtive textCenter'>
                                    <div className='pAbsolute colorWhite textFontSize30 sICON'>
                                        <Icon type="caret-up" />
                                    </div>
                                    <p className="textFontSize16 textColor333">标题标题标题标题</p>
                                    <p className='textFontSize14 textColor666 textLineHeight30'>
                                        文字的内容文字的内容文字的内容
                                         文字的内容文字的内容文字的内容
                                          文字的内容文字的内容文字的内容
                                           文字的内容文字的内容文字的内容
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                        </p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='specilItem3 mga boxShowdow radius5 hoverBoxScale'>
                                <div className="img">

                                </div>
                                <div className='pd20 pRealtive textCenter'>
                                    <div className='pAbsolute colorWhite textFontSize30 sICON'>
                                        <Icon type="caret-up" />
                                    </div>
                                    <p className="textFontSize16 textColor333">标题标题标题标题</p>
                                    <p className='textFontSize14 textColor666 textLineHeight30'>
                                        文字的内容文字的内容文字的内容
                                         文字的内容文字的内容文字的内容
                                          文字的内容文字的内容文字的内容
                                           文字的内容文字的内容文字的内容
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                        </p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='specilItem3 mga boxShowdow radius5 hoverBoxScale'>
                                <div className="img">

                                </div>
                                <div className='pd20 pRealtive textCenter'>
                                    <div className='pAbsolute colorWhite textFontSize30 sICON'>
                                        <Icon type="caret-up" />
                                    </div>
                                    <p className="textFontSize16 textColor333">标题标题标题标题</p>
                                    <p className='textFontSize14 textColor666 textLineHeight30'>
                                        文字的内容文字的内容文字的内容
                                         文字的内容文字的内容文字的内容
                                          文字的内容文字的内容文字的内容
                                           文字的内容文字的内容文字的内容
                                            文字的内容文字的内容文字的内容
                                             文字的内容文字的内容文字的内容
                                              文字的内容文字的内容文字的内容
                                        </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='w1200 pdt80'>
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        业务板块1
                        </h1>
                    <Row>
                        <Col span={6}>
                            <div className='bussinessItem box textCenter boxShowdow' >
                                <div className='mga bussinessImg' style={{ backgroundImage: `url(${ruanwen})` }}>

                                </div>
                                <h2 className='textFontSize18'>
                                    网络营销
                                    </h2>
                                <p className="textFontSize14 textLineHeight30">
                                    新闻稿发布，4000家已验证权威网络媒体资源，覆盖全行业，全渠道，全天发稿服务。
                                    </p>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='bussinessItem box textCenter boxShowdow' >
                                <div className='mga bussinessImg' style={{ backgroundImage: `url(${shangcheng})`, backgroundSize: '90px' }}>

                                </div>
                                <h2 className='textFontSize18'>
                                    微信商城/小程序
                                    </h2>
                                <p className="textFontSize14 textLineHeight30">
                                    新闻稿发布，4000家已验证权威网络媒体资源，覆盖全行业，全渠道，全天发稿服务。
                                    </p>
                            </div>

                        </Col>
                        <Col span={6}>
                            <div className='bussinessItem box textCenter boxShowdow' >
                                <div className='mga bussinessImg' style={{ backgroundImage: `url(${xianshangxianxia})`, backgroundSize: '85px' }}>

                                </div>
                                <h2 className='textFontSize18'>
                                    线上线下指导经营
                                    </h2>
                                <p className="textFontSize14 textLineHeight30">
                                    新闻稿发布，4000家已验证权威网络媒体资源，覆盖全行业，全渠道，全天发稿服务。
                                    </p>
                            </div>


                        </Col>
                        <Col span={6}>
                            <div className='bussinessItem box textCenter boxShowdow' >
                                <div className='mga bussinessImg' style={{ backgroundImage: `url(${dingzhi})`, backgroundSize: '90px' }}>

                                </div>
                                <h2 className='textFontSize18'>
                                    软件定制开发
                                    </h2>
                                <p className="textFontSize14 textLineHeight30">
                                    新闻稿发布，4000家已验证权威网络媒体资源，覆盖全行业，全渠道，全天发稿服务。
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='w1200 pdt80'>
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        业务板块
                        </h1>
                    <div className='product-item'>
                        <ul className='flex-wrap'>
                            <li className='multi-item'>
                                <div className="mask">
                                    <div className="img">
                                        <img src={weixin} alt="" style={{ width: '100%' }} />
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
                <div className='w1200 pdt80' >
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        他们也在使用<span className="textColorPrimary">易聚推</span>
                    </h1>
                    <Row>
                        <Col lg={{ span: 8 }} xs={{ span: 8 }}>
                            <div className='box boxShowdow hoverBoxScale'>
                                <div className='mask homeMask p20'>
                                    <div className="img mgb18">

                                    </div>
                                    <p className="textCenter colorWhite">
                                        "这个是标题" 某一个酒家
                                    </p>
                                    <p className='textCnter colorWhite'>
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 8 }}>
                            <div className='box boxShowdow hoverBoxScale'>
                                <div className='mask homeMask p20'>
                                    <div className="img mgb18">

                                    </div>
                                    <p className="textCenter colorWhite">
                                        "这个是标题" 某一个酒家
                                    </p>
                                    <p className='textCnter colorWhite'>
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                    </p>
                                </div>

                            </div>
                        </Col>
                        <Col lg={{ span: 8 }} xs={{ span: 8 }}>
                            <div className='box boxShowdow hoverBoxScale'>
                                <div className='mask homeMask p20'>
                                    <div className="img mgb18">

                                    </div>
                                    <p className="textCenter colorWhite">
                                        "这个是标题" 某一个酒家
                                    </p>
                                    <p className='textCnter colorWhite'>
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                        描述 描述 描述 描述 描述 描述 描述 描述 描述 描述
                                    </p>
                                </div>
                            </div>
                            <p className='homeUsers textFontSize16 textLeft textColor666' >
                                双11活动大促期间，每日新增会员数超过<span className='textColorPrimary'>999</span>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className='wFull bgF7FBFF pdt80 pdb30' id='about'>
                    <div className='w1200'>
                        <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                            关于我们
                        </h1>
                        <Row>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <p className='prl20 textLineHeight50 textFontSize16 textIndent'>
                                    <span className='fontweight600'>成都翰飞科技有限责任公司（简称：韩飞科技）</span>成立于2014年；
                                    位于成都市双流区西航港蓝光空港国际城；
                                    韩飞科技以“创新科技、服务未来、卓越品质”为众多用户提供互联网技术服务；
                                    高效服务、诚信为本是我们的初衷。公司由行内多年技术研发专家成立的研发小组，已累计数多年的研发经验，公司设有研发部、技术部、运营部、测试部、推广部、综合部；目前已为多家中小型创业公司创造了辉煌的业绩。 
                                </p>
                                {/* <p className='prl20 textLineHeight30 textFontSize16 textIndent'>
                                    <span className='fontweight600'>网络营销（市场推广、多渠道推广）：</span>
                                    翰飞科技能有效解决中小型企业推广痛点，后台开发有专业的营销系统，富有丰富的推广资源，包括软文、微信、微博、小红书、短视频等平台，解决客户推广难、效果差、成本高的顾虑，针对不同的用户群体，翰飞科技为你提供成本低、效率高、准确、易用的多渠道推广！
                                </p>
                                <p className='prl20 textLineHeight30 textFontSize16 textIndent'>
                                    <span className='fontweight600'>软件开发（微信小程序、微商城、网站建设等）：</span>
                                    为企业提供移动互联网一体化解决方案、由专业的技术团队自助研发，我们将定期对系统后台进行维护与更新，免费为客户提供跟踪服务！
                                </p> */}
                            </Col>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <div id="orderDetailMap" style={{width:"100%",height:"500px"}}>最好地图自己设置高度，否则地图容易不显示出来</div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Commanbar />
                <Footer/>
            </div>
        );
    }
}

export default Home;