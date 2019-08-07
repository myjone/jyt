import React, { Component } from 'react';
import "@/assets/less/pc/home.less"
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

render() {
    return (
        <div className='pdt80'>
            <div className='joinCrad boxShowdow radius5 textLineHeight50'>
                <h2 className='fontweight600 textCenter textColor333 textFontSize18 pd20'>易聚推-代理商申请</h2>
                </div>
        </div>
    );
}
}

export default Join;