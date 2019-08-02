import React, { Component } from 'react';
import { Button } from 'antd'
class CommanBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className='wFull commonBar'>
                    <h1>
                        易聚推，让天下没有难做的生意
                    </h1>
                    <Button className='bigLarge' style={{fontSize:'16px'}}>免费试用</Button>
                </div>
            </div>
        );
    }
}

export default CommanBar;