import React from 'react';
import { Form, Icon, Input, Button, Alert, Col, Row, Card } from 'antd';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import "./../Login/login.css"
import { URL_API } from '../../Utils/Constants';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            password: '',
            userAuthenticated: false,
            hasRequestError: false,
            errorMsg: ''
        }
    }

    async loginRequest(obj) {
        var url = URL_API + "User/login/";//constants.GetUrlApiRegisterUser();
        return await axios.post(url,obj);
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
                // vai fazer request axios para logar
                this.loginRequest(jsonObject).then((response) => {
                    if (response.status === 200) {
                        //alert(JSON.stringify("Teste:" + response.data.result.loginDone));
                        if(response.data.result.loginDone)
                        {
                            const userObject = {
                                id: response.data.result.id,
                                name: response.data.result.name,
                                nickname: response.data.result.nickname
                            }

                            this.props.login()
                            localStorage.setItem('user', JSON.stringify(userObject))
                            self.setState({
                                userAuthenticated: true
                            })
                        }
                        else
                        {
                            self.setState({
                                hasRequestError: true,
                                errorMsg: "Usuário ou senha inválidos"
                            })
                        }
                    }
                }).catch((err) => {
                    console.log('err', err)
                    if (err.response) {
                        self.setState({
                            hasRequestError: true,
                            errorMsg: err.response.data.message
                        })

                    } else {
                        self.setState({
                            hasRequestError: true,
                            errorMsg: "Erro Interno no Servidor, por favor tente novamente mais tarde!"
                        })

                    }
                })
            }
        });
    }

    render() {
        // console.log(this.props.login())
        const { getFieldDecorator } = this.props.form;

        if (this.state.userAuthenticated) return <Redirect to={"/dashboard"} />;

        return (
            <div style={{ background: '#FFFF'}}>
                <h1 className={"loginTitle"}>Login</h1>
                {this.state.hasRequestError && (
                    <Alert style={{ margin: ' 20px auto', maxWidth: 350 }} type={"error"} message={"Erro!"} description={this.state.errorMsg} />
                )}
                <div style={{ background: '#FFFF'}}>
                    <Row gutter={16}>
                        <Col span={8}>
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
                        <Col span={8}>
                            <Card title="Quero me cadastrar!" bordered={true}>
                                <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    </p> 
                                </div>
                                <Button type="primary"><Link to="/cadastro">Quero me cadastrar!</Link></Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm
