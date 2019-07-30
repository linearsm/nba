import React, { Component } from 'react';
import { Layout, Row, Col, Button, Card, Form, Icon, Input } from 'antd';
import { Link,Redirect } from "react-router-dom";
import './index.css'
import { Typography } from 'antd';
const { Text } = Typography;
const { Content } = Layout;


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            password: '',
            userAuthenticated: false,
            hasRequestError: false,
            errorMsg: '', 
           
        }
    }
    componentWillMount() {

        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) {
          this.setState({
            userAuthenticated: true,
          })
        } else {
          this.setState({
            userAuthenticated: false,
          })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let self = this;
        this.props.form.validateFields((err, values) => {
            this.setState({values});
            //alert(JSON.stringify(values));
            if (!err) {
                const jsonObject = {
                    "nickname": this.state.values.nickname,
                    "password": this.state.values.password
                
                }

                alert(JSON.stringify(jsonObject));
                localStorage.setItem('user', JSON.stringify(jsonObject));
                self.setState({
                    userAuthenticated: true
                })
            }
        });
    }

    
    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.state.userAuthenticated) return <Redirect to={"/dashboard"} />;


        return (
            <Layout>
                <Content >
                    <Row className={"divHome"}>
                        <Row>
                            <Col span={8}>
								<Col span={24}>
                                    <Card title="Já tenho uma conta" bordered={true}>
                                        <div >
                                            <Form onSubmit={this.handleSubmit} className="login-form">
                                                <Form.Item>
                                                    {getFieldDecorator('nickname',
                                                        {
                                                            rules: [
                                                                { required: true, message: 'Por favor insira seu e-mail!' }],
                                                            initialValue: this.state.nickname,
                                                        })(
                                                            <Input name="nickname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="nickname" />
                                                        )}
                                                </Form.Item>
                                                <Form.Item>
                                                    {getFieldDecorator('password', {
                                                        rules: [{ required: true, message: 'Preencha sua senha por favor!' }],
                                                    })(
                                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Senha" />
                                                    )}
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                                        Fazer Login!
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </div>
                                    </Card>
								</Col>
                            </Col>
                        </Row>
                    </Row>
                </Content>
            </Layout >
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Index);

export default WrappedNormalLoginForm
