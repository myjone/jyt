import React, { Component } from 'react';
//import loginBg from "@/assets/images/loginbg.jpg"
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row className='login'>
                    <Col xs={12} sm={12} md={12} lg={12} xl={18}>
                        <div className="login-info">
                            <div className='textCenter colorWhite'>
                                <h1 className='textFontSize48 colorWhite'>易聚推-欢迎你</h1>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                        <div className="login-box">
                            <div className='login-box-card'>
                                <p className='textCenter textFontSize30 textLineHeight50'>登&nbsp;&nbsp;录</p>
                                <div>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: '请输入您的用户名!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Username"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入您的密码！' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="Password"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })(<Checkbox>记住密码</Checkbox>)}
                                           
                                             
                                        </Form.Item>
                                        
                                        <Form.Item>
                                           <Button type="primary" htmlType="submit" className="login-form-button">
                                                  登录
                                           </Button>
                                         </Form.Item>
                                        <Form.Item>
                                           还没有账号? &nbsp;<a href="">立即注册</a>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

        );


    }
}

Login = Form.create()(Login);



export default Login;