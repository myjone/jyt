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
        return (
            <div>
                <div className='nav whiteNav'>
                    <div className="nav_Content">
                        <div className="nav_Content_logo">

                        </div>
                        <ul className="nav_Content_navbar">
                            <li onClick={this.handleScrollToAnchor.bind(this, "products")}
                                className={
                                    this.state.anchorActive === "products" ? 'active' : null
                                }>
                                产品功能
                            </li>
                            <li onClick={this.handleScrollToAnchor.bind(this, "case")}
                                className={
                                    this.state.anchorActive === "case" ? 'active' : null
                                }>
                                案例
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
                                    this.state.anchorActive === "about" ? 'active' : null
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

            </div>
        )
    }
}

export default Header;