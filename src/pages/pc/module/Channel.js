import React, { Component } from 'react';
import {Button} from "antd"
import {Row,Col} from "antd"
class Channel extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="wFull channelBanner">
                    <div className='w1200'>
                        <div className="largeTtle colorWhite textLeft">
                            小鹅通产品代理商全国火热招募
                        </div>
                        <p className='subTitle colorWhite textLeft'>
                           代理小鹅通，轻松掘金内容付费及小程序
                        </p>
                        <div className='btnInlineGroup' style={{marginTop:'30px'}}>
                                        <Button  className='bigLarge' type='primary' style={{color:'#fff'}}>
                                            免费试用
                                         </Button>
                                        <Button  ghost style={{color:'#105CFB'}} className='bigLarge'>
                                            了解更多
                                        </Button>
                        </div>
                    </div>
                </div>
                <div className='w1200'>
                    <p className="channelTitle pdt120 textCenter">
                            携手小鹅通   共掘内容付费万亿市场
                    </p>
                </div>
                <div className='w1200'>
                    <Row>
                    <Col span={12}>
                    <div className='IconLael pdb40 pdl60 pdr60'>
                            <div className="icon">

                            </div>
                            <div className="title20 textLeft mgb18">
                                工具升级
                            </div>
                            <p>
                               移动支付的普及和H5、小程序等新内容表现形式的发展，极大扩展了内容变现的覆盖场景
                            </p>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                    <div className='IconLael pdb40 pdl60 pdr60'>
                            <div className="icon">

                            </div>
                            <div className="title20 textLeft mgb18">
                                工具升级
                            </div>
                            <p>
                               移动支付的普及和H5、小程序等新内容表现形式的发展，极大扩展了内容变现的覆盖场景
                            </p>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                    <div className='IconLael pdb40 pdl60 pdr60'>
                            <div className="icon">

                            </div>
                            <div className="title20 textLeft mgb18">
                                工具升级
                            </div>
                            <p>
                               移动支付的普及和H5、小程序等新内容表现形式的发展，极大扩展了内容变现的覆盖场景
                            </p>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                        <div className='IconLael pdb40 pdl60 pdr60'>
                            <div className="icon">

                            </div>
                            <div className="title20 textLeft mgb18">
                                工具升级
                            </div>
                            <p>
                               移动支付的普及和H5、小程序等新内容表现形式的发展，极大扩展了内容变现的覆盖场景
                            </p>
                        </div>
                        
                    </Col>
                    </Row>
                   
                </div>
                <div className='w1200'>
                    <p className="channelTitle pdt120 textCenter">
                         小鹅通扶持计划
                    </p>
                    <Row>
                        <Col xs={{span:8}}  lg={{span:8}}>
                            <div className='box boxShowdow hoverBoxScale'>
                                <div className="boxHeader">
                                    <div className="title colorWhitw">
                                        这个是标题
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:8}}  lg={{span:8}}>
                        <div className='box'>
                                <div className="boxHeader">
                                    <div className="title colorWhitw">
                                        这个是标题
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span:8}}  lg={{span:8}}>
                        <div className='box'>
                                <div className="boxHeader">
                                    <div className="title colorWhitw">
                                        这个是标题
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
         );
    }
}
 
export default Channel;