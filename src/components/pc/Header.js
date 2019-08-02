import React, { Component } from "react";
import { Button, Menu, Dropdown, Icon } from "antd"
import { NavLink } from "react-router-dom"
import "@/assets/less/pc/header.less"
class Header extends Component {
    constructor() {
        super()
        this.state = {
            list: ['公司简介', '加入我们', '媒体报道', '延伸阅读', '帮助']
        }
    }

    render() {
        const menu = (
            <Menu>
                {
                    this.state.list.map((value, key) => {
                        return (
                            <Menu.Item key={key}>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                                    {value}
                                </a>
                            </Menu.Item>
                        )
                    })
                }

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
                                <NavLink to="/" activeClassName={'active'}>首页</NavLink>
                                {/* <a href="" className='active'>
                                   
                                </a> */}
                            </li>
                            <li>
                                {/* <Dropdown overlay={menu} overlayClassName='navOverlay'>
                                    <a href="">
                                        关于我们 <Icon type="down" style={{ fontSize: '12px' }} />
                                    </a>
                                </Dropdown> */}
                                <NavLink to="/product" activeClassName={'active'}>产品介绍</NavLink>

                            </li>
                            <li>
                                <NavLink to="/price" activeClassName={'active'}>定价</NavLink>
                                {/* <a href="">
                                    定价
                                </a> */}
                            </li>
                            <li>
                                <NavLink to="/example" activeClassName={'active'}>案例</NavLink>
                                {/* <a href="">
                                    案例
                                </a> */}
                            </li>
                            <li>
                                <NavLink to="/channel" activeClassName={'active'}>渠道合作</NavLink>

                                {/* <a href="">
                                    渠道合作
                                </a> */}
                            </li>
                            <li>
                                {/* <Dropdown overlay={menu} overlayClassName='navOverlay'>
                                    <a href="">
                                        关于我们 <Icon type="down" style={{ fontSize: '12px' }} />
                                    </a>
                                </Dropdown> */}
                                <NavLink to="/about" activeClassName={'active'}>关于我们</NavLink>
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