import React, { Component } from "react"
import { Row, Col, Anchor,Carousel ,Button,Icon} from "antd"
import "@/assets/less/pc/header.less"
import "@/assets/less/pc/home.less"
import Footer from "@/components/pc/Footer"
import banner from "@/assets/images/banner.jpg"
import changjing from "@/assets/images/icon/changjing.png"
import xitongwending from "@/assets/images/icon/xitongwending.png"
import jiaoyibianjie from "@/assets/images/icon/jiaoyibianjie.png"
import fuwuzhuanye from "@/assets/images/icon/fuwuzhuanye.png"
import jingzhunyingxiao from "@/assets/images/icon/jingzhunyingxiao.png"
import weixinshangchengxiaochengxu from "@/assets/images/weixinshangchengxiaochengxu.jpeg"
import yingxiaotuiguang from "@/assets/images/yingxiaotuiguang.jpeg"
import yunyingzhidao from "@/assets/images/yunyingzhidao.jpeg"
import shichangyingxiao from "@/assets/images/shichangyingxiao.jpeg"
import Logo from "@/assets/images/logo.png"
import pyunyingzhidao from "@/assets/images/pyunyingzhidao.jpeg"
import tangdaxiao from "@/assets/images/tangdaxiao.jpeg"
import tianshengguiyiner from "@/assets/images/tianshengguiyiner.jpeg"
import chizhiliang from "@/assets/images/chizhiliang.jpeg"
import leyixiang from "@/assets/images/leyixiang.jpeg"
const { Link } = Anchor;
class Home extends Component {
    constructor() {
        super()
        this.state = {
            list: [{
                src: xitongwending,
                title: '系统稳定',
                info: '7x24小时实时护航'
            }, {
                src: fuwuzhuanye,
                title: '服务专业',
                info: '提供一对一的专业服务'
            }, {
                src: jiaoyibianjie,
                title: '交易便捷',
                info: '多种支场景，快捷交易'
            }, {
                src: changjing,
                title: '场景多样',
                info: '公众号,小程序,PC,H5 '
            }, {
                src: jingzhunyingxiao,
                title: '精准营销',
                info: '大数据分析,点对点营销'
            }],

            serviceList: [
                {
                    src: weixinshangchengxiaochengxu,
                    title: '微商城/小程序',
                    info: "基于目前最受欢迎的社交软件微信，助你打造功能更强大的微商城管理系统。在后台你可以轻松对会员用户、广告投放、商品展示、购物交易进行有效的多方位管理，其优点成本低、传播速度快、功能大、应用场景广等营销优势；微商城还为你提供了上百种营销玩法，助你快速提升交易流量。"
                }, {
                    src: yingxiaotuiguang,
                    title: '营销推广',
                    info: '依靠自身强大的媒体资源整合能力为用户提供线上线下全方位立体广告服务，以自媒体（微博，微信达人，公众号）达人网红推广，软文推广，抖音快播视屏，网页竞价等互联网媒体为基础搭配强大的一线传统媒体，多渠道覆盖为你推送产品商家信息，通过大数据过滤为你精准锁定潜在c端资源客户助力商家实现新的飞跃！'
                }, {
                    src: yunyingzhidao,
                    title: "运营指导",
                    info: '翰飞科技通过对超过40个行业和场景的深度了解探索及数据收集为商家提供更多更适合的运营管理经验，从自助开店，营销工具应用，内部培训，分销渠道开辟，系统化管理，数据互通，简化运营等方面为客户提供专业解答，线上视频教学，同行社交活动，运营官特训等无微不至的体贴服务！'
                }
            ],
            caseList:[
                {
                    title:'天生贵银耳',
                    info:'成都天生贵商贸有限公司成立于2017年，该公司主要经营四川通江的段木银耳；起初天生贵在四川开设有多家的实体门店，基于互联网的迅速发展，现在天生贵在线上搭建有多家微商城小店，通过线下的流量引流，为实体店铺节省了更多的成本。',
                    src:tianshengguiyiner
                },
                {
                    title:'车之靓名车维修美容',
                    info:'车之靓美容公司为周边的小区户主开设社区便捷服务，可快速维修、上门服务等业务；通过微商城的服务优势为户主提供线上预约、查看车辆信息、商家维修进度，同时车主也可在微商城查看近期活动、会员套餐等。车之靓致力于服务中国广大车主。',
                    src:chizhiliang
                },{
                    title:'乐益享',
                    info:'翰飞科技微商城为乐益享超市提供了专属的订单系统，乐益享的顾客能像网购一样订货；解决了店铺业务员电话沟通、上门抄单等不便问题，其中微商城还提供了丰富的营销玩法、例如商品打折、优惠券、红包等等，有效解决生意难的困扰',
                    src:leyixiang
                },{
                    title:'唐大侠龙虾',
                    info:'唐大侠龙虾店铺开设在商圈周边，每天成交量约在120单左右，为吸引、照顾更多的周边顾客，唐大侠龙虾店开通了微商城的搭建，通过微商城的平台，为商圈周围的顾客提供了便捷的点餐服务，客户只需在线上点餐，商家可通过上门服务的方式，为顾客提供更便捷、周到的服务',
                    src:tangdaxiao
                }
            ]
        }
    }

    componentDidMount() {
        this.renderMap()
    }
    //地图展示
    renderMap = () => {
        var sContent = "成都市双流区西航港蓝光空城国际城7栋3单元709号";
        this.map = new window.BMap.Map("orderDetailMap");
        var point = new window.BMap.Point(104.030794, 30.579076);
        this.map.centerAndZoom(point, 15);
        var marker = new window.BMap.Marker(point);  // 创建标注
        this.map.addOverlay(marker);
        var infoWindow = new window.BMap.InfoWindow(sContent);  // 创建信息窗口对象
        this.map.openInfoWindow(infoWindow, point); //开启信息窗口

        var navigationControl = new window.BMap.NavigationControl({
            // 靠左上角位置
            anchor: window.BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: window.BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: false
        });
        this.map.addControl(navigationControl);
    }
    render() {
        const { serviceList , caseList} = this.state;
        return (
            <div>
                <div className='nav whiteNav'>
                    <div className="nav_Content">
                        <div className="nav_Content_logo">
                            <img src={Logo} style={{ width: '50px' }} className='logo'></img>
                            聚易推
                        </div>
                        <ul className="nav_Content_navbar">
                            <Anchor showInkInFixed={false} affix={false} offsetTop={100}>
                                <li>
                                    <Link href="#banner" title="聚易推" />
                                </li>
                                <li>
                                    <Link href="#products" title="产品功能" />
                                </li>

                                <li>
                                    <Link href="#service" title="服务" />
                                </li>
                                <li>
                                    <Link href="#case" title="案例" />
                                </li>
                                <li>
                                    <Link href="#about" title="关于我们" />
                                </li>
                            </Anchor>
                        </ul>
                        <div className="nav_Content_btnGroup">
                            <Button type="link">
                                <a href='http://www.juyitui.com/jytuser/login'>登录</a>
                            </Button>
                            <Button type="primary" shape="round">
                                <a href='http://www.juyitui.com/jytuser/register'>注册</a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='banner' id='banner'>
                    <Carousel autoplay effect="fade">
                        <Row>
                            <Col>
                                <img src={banner} alt="" style={{ width: '100%' }} />
                            </Col>
                        </Row>

                    </Carousel>
                </div>
                <div className='w1200 pdt80' id='products'>
                    <ul className='advantages'>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li className='advantages-item' key={index}>
                                        <div className="image">
                                            <img src={item.src} style={{ width: "100%" }}></img>
                                        </div>
                                        <p className="title">{item.title}</p>
                                        <p className='content'>{item.info}</p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className='w1200 pdt80 pdb30'>
                    <h1 className='textFontSize32 textCenter mgb50'>
                        市场营销资源
                        </h1>
                    <Row>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <div className="himage">
                                <img src={shichangyingxiao} alt="市场营销资源"/>
                            </div>
                        </Col>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <p className='pdl73 textFontSize16 textLineHeight50'>
                                    富有多样化的营销工具供你选择，推广您的产品已不再困扰。
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className='wFull bgF7FBFF pdt80 pdb30'>
                    <div className='w1200'>
                        <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                            微商城小程序
                        </h1>
                        <Row>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <p className='textFontSize16 textLineHeight50 pdr73'>
                                有效解决零基础上手难的门槛，微商城内置丰富的营销工具让你轻松卖货，经典的分销玩法，让你的成交额快速提升。
                            </p>
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
                        行业运营
                        </h1>
                    <Row>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <div className="himage">
                                <img src={pyunyingzhidao}></img>
                            </div>
                        </Col>
                        <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                            <p className='pdl73 textLineHeight50 pdr73'>
                                 韩飞科技为您提供更多的运营方案，更轻松玩转网络营销
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className='w1200 pdt80' id='service'>
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        聚易推能为您提供服务
                        </h1>
                    <Row>
                        {
                            serviceList.map((item, index) => {
                                return (
                                    <Col span={8} key={index}>
                                        <div className='specilItem3 mga boxShowdow radius5 hoverBoxScale'>
                                            <div className="img">
                                                <img src={item.src} style={{ width: "100%" }}></img>
                                            </div>
                                            <div className='pd20 pRealtive textCenter' style={{ height: "304px" }}>
                                                <div className='pAbsolute colorWhite textFontSize30 sICON'>
                                                    <Icon type="caret-up" />
                                                </div>
                                                <p className="textFontSize16 textColor333">{item.title}</p>
                                                <p className='textFontSize14 textColor666 textLineHeight30'>
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>
                <div className='w1200 pdt80 mgb30' id='case'>
                    <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                        他们正在使用聚易推
                    </h1>
                    <Row>

                        {
                            caseList.map((item,index)=>{
                                return(
                                    <Col span={6} key={index+item.src}>
                                    <div className='box boxShowdow hoverBoxScale radius5 bgCommon' style={{ width: "280px",backgroundImage:`url(${item.src})` }}>
                                        <div className='mask homeMask p20'>
                                            <div className="img pdt20 mgb18 textCenter colorWhite textFontSize20">
                                               {item.title}
                                            </div>
                                            <p className='textCnter colorWhite'>
                                                {item.info}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                )
                            })
                        }
                      
                    </Row>
                </div>
                <div className='wFull  pdt80 pdb30' id='about'>
                    <div className='w1200'>
                        <h1 className='textFontSize32 textCenter mgb50 textColor333'>
                            关于我们
                        </h1>
                        <Row>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <p className='prl20 textLineHeight50 textFontSize16 textIndent'>
                                    <span className='fontweight600'>成都翰飞科技有限责任公司（简称：翰飞科技）</span>成立于2014年；
                                    位于成都市双流区西航港蓝光空港国际城；
                                    翰飞科技以“创新科技、服务未来、卓越品质”为众多用户提供互联网技术服务；
                                    高效服务、诚信为本是我们的初衷。公司由行内多年技术研发专家成立的研发小组，已累计数多年的研发经验，公司设有研发部、技术部、运营部、测试部、推广部、综合部；目前已为多家中小型创业公司创造了辉煌的业绩。
                                </p>
                                <ul className=' prl20 textLineHeight50 textFontSize16'>
                                    <li>
                                        联系电话：<span className='fontweight600 textColorPrimary textFontSize18' >1808-0163-524</span>
                                    </li>
                                    <li>
                                        公司地址：成都市双流区西航港蓝光空城国际城7栋3单元709号
                                    </li>
                                    <li>
                                        客服支持：1295520785@qq.com
                                    </li>
                                    <li>
                                        商务合作：1295520785@qq.com
                                    </li>
                                    <li>
                                        渠道合作：1295520785@qq.com
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                                <div id="orderDetailMap" style={{ width: "100%", height: "500px" }}>最好地图自己设置高度，否则地图容易不显示出来</div>
                                <div id='r-result'></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
