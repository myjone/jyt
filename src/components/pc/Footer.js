import React, { Component } from "react"
import "@/assets/less/pc/footer.less"
class Footer extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    title: '行业解决方案',
                    type: 'list',
                    data: [
                        {
                            title: '新教育',
                        }, {
                            title: '知识付费'
                        }, {
                            title: '在线出版'
                        }
                    ]
                }, {
                    title: '场景解决方案',
                    type: 'list',
                    data: [
                        {
                            title: '小鹅打开',
                        }, {
                            title: '在线直播'
                        }
                    ]
                }, {
                    title: '联结分发',
                    type: 'list',
                    data: [
                        {
                            title: '内容分销',
                        }, {
                            title: '广告分发'
                        }
                    ]
                }, {
                    title: '其他产品',
                    type: 'list',
                    data: [
                        {
                            title: '会议系统',
                        }, {
                            title: '企业内训'
                        }, {
                            title: '公益计划'
                        }
                    ]
                }, {
                    title: '其他产品',
                    type: 'list',
                    data: [
                        {
                            title: '会议系统',
                        }, {
                            title: '企业内训'
                        }, {
                            title: '公益计划'
                        }
                    ]
                }, {
                    title: '关于我们',
                    type: 'list',
                    data: [
                        {
                            title: '公司简介',
                        }, {
                            title: '加入我们'
                        }, {
                            title: '媒体报道'
                        }, {
                            title: '延伸阅读',
                        }, {
                            title: '帮助中心'
                        }, {
                            title: '客户案例'
                        }
                    ]
                }, {
                    title: '媒体报道',
                    type: 'media',
                    data: [
                        {
                            title: '微信大号背后的小鹅通：2亿知识付费用户，总流水22亿',
                        }, {
                            title: '小鹅通发布首份《知识付费内容分销白皮书》'
                        }, {
                            title: '年GMV22亿，为吴晓波、樊登等服务，小鹅通牛在哪？'
                        }, {
                            title: '在线教育成为知识付费新风口，小鹅通发布企业内训产品',
                        }, {
                            title: '小鹅通公布2周年成绩，平台总流水破22亿领跑'
                        }
                    ]
                }

            ]
        }
    }

    render() {
        return (
            <div className="footer">
                {/* <div className="footer_contain">
                    <div className="foot">
                        <h1 className="tel">18080163524</h1>
                        <p className="time">周一至周日 9：00 - 21：30</p>
                        <div className="qr">
                            <div className="gzh">
                                <img src="" alt="" />
                                <p> 关注易聚推公众号</p>
                            </div>
                            <div className='zsdp'>
                                <img src="" alt="" />
                                <p>进入聚易推联盟</p>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <dl className={value.type=='media'?'media-report':"null"} key={key}>
                                    <dt>
                                        {value.title}
                                    </dt>
                                    {
                                        value.data.map((item,key)=>{
                                            return(
                                                <dd key={key}>
                                                  <a href="">{item.title}</a>
                                              </dd>
                                            )
                                        })
                                    }
                                </dl>
                            )
                        })
                    }
                </div> */}
                <div className="bottom">
                    <ul className="concat-way">
                        <li className='email'>客服支持：1295520785@qq.com</li>
                        <li className='email'>商务合作：1295520785@qq.com</li>
                        <li className='email'>渠道合作：1295520785@qq.com</li>
                        <li className='address'>公司地址：成都市双流区西航港蓝光空城国际城7栋3单元709号</li>
                    </ul>
                    <div className='copyright'>
                        <p className="copyright-info">Copyright © 2019-2028 成都翰飞科技有限责任公司</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;