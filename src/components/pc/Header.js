import React, { Component } from "react";
import { Button, Menu, Dropdown, Icon} from "antd"
import { Icon } from 'antd';
import "@/assets/less/pc/header.less"
class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    
    render() {
        const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    1st menu item
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
      </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
      </a>
            </Menu.Item>
        </Menu>
    )
        return (
            <div>
                <div className='nav whiteNav'>
                    <div className="nav_Content">
                        <div className="nav_Content_logo">

                        </div>
                        <ul className="nav_Content_navbar">
                            <li>
                                <a href="" className='active'>
                                    首页
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    产品 <Icon type="down" style={{ fontSize: '12px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    定价
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    案例
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    内容分销
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    商城学院
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    渠道合作
                                </a>
                            </li>
                            <li>
                                <Dropdown overlay={menu}>
                                <a href="">
                                    关于我们 <Icon type="down" style={{ fontSize: '12px' }} />
                                </a>
                                </Dropdown>
                            </li>
                        </ul>
                        <div className="nav_Content_btnGroup">
                            <Button type="link">登录</Button>
                            <Button type="primary" shape="round">
                                注册
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;