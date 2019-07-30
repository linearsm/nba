import React from 'react';
import {Layout, Menu, Icon, Avatar, Divider,Col, Row} from 'antd';
import { BrowserRouter as Router, Route,Link, Redirect,Switch} from "react-router-dom";
import "../../Components/Navbar/Navbar.css"

import Dashboard from '../../Pages/Dashboard/dashboard'
import Index from '../../Pages/Index'
import Expenses from '../../Pages/Expenses/Expenses'
import Income from '../../Pages/Income/Income'
import PEL from '../../Pages/PEL/PEL'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content,Footer} = Layout;

export default class Navbar extends React.Component {
  state = {
    name: "",
    id: "",
    nickname: "",
    current: 'mail',
    isLoggout: false,
    collapsed: false,
    imgLogo: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
    classLogo:'logo',
    classMenu:'Teste',
    logoPqno: false
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user: " + JSON.stringify(user));
    if (user) {
      this.setState({
          name:  user.name,
          id: user.id,
          nickname: user.nickname
      })
    } 
    else {
      this.setState({
          user: null,
      })
    }
  }

  toggle = () => {
    if(this.state.logoPqno)
    {
      this.setState({
        collapsed: !this.state.collapsed,
        imgLogo: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
        classLogo:'logo',
        logoPqno:false
      });
    }
    else
    {
      this.setState({
        collapsed: !this.state.collapsed,
        imgLogo: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
        classLogo:'logoPqno',
        logoPqno: true
      });
    }
    if(this.state.classMenu === "Teste"){
      this.setState({
        classMenu:'Teste2',
      });
    }
    else{
      this.setState({
        classMenu:'Teste',
      });
    }
    
  };

  renderUserArea() {
    if (this.props.isLogged) {
        return (
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="user" />Área do Usuário</span>}>
                <MenuItemGroup key="alertas" >
                    <Menu.Item key="meus-alertas"><Link to="/meus-alertas">Meus Alertas</Link></Menu.Item>
                    <Menu.Item key="cadastrar-alerta"><Link to="/cadastro-alerta">Cadastrar Alerta</Link></Menu.Item>
                </MenuItemGroup>
            </SubMenu>
        )
    }
  };
  
  handleClick = (e) => {
    // console.log('click ', e);
    this.setState({
        current: e.key,
    });
  }

  handleLogout() {

  }
  render() {
    if (this.state.isLoggout) {
        return <Redirect to="/" />
    } 
    else {
      return (
          <Layout style={{
              background: '#fff',
            }}
          >
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}  
              style={{
                minHeight: '120vh',
                height: 'auto',
              }} 
              className={this.state.classMenu}>
              {/* <div className="logo" /> */}
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                className="menu"
              >
                <div className="divPerfil">
                  <img alt="example" src={this.state.imgLogo} className={this.state.classLogo} />
                  <Divider/>
                </div>
                <Menu.Item key="1" >
                  <Icon type="edit"/>
                  <span className="itemMenu">Dashboard</span>
                  <Link to="/Dashboard"></Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="team" />
                  <span className="itemMenu">P&#38;L</span>
                  <Link to="/PEL"></Link>
                </Menu.Item>
                <Menu.Item key="3" className="menuItem">
                  <Icon type="dollar" />
                  <span className="itemMenu">Income</span>
                  <Link to="/Income"></Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="shop" />
                  <span className="itemMenu">Expenses</span>
                  <Link to="/Expenses"></Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="shop" />
                  <span className="itemMenu">Events</span>
                  <Link to="/Events"></Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="shop" />
                  <span className="itemMenu">Budget</span>
                  <Link to="/Budget"></Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}  className="headerColor">
                <Row gutter={16}>
                  <Col className="gutter-row" span={6}>
                    <Icon
                      className="backMenu"
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                  </Col>
                  <Col className="gutter-row" span={6}>
                    {/* <div className="gutter-box">col-6</div> */}
                  </Col>
                  <Col className="gutter-row" span={6}>
                    {/* <div className="gutter-box">col-6</div> */}
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menuUsuario" >
                      <SubMenu 
                        title={
                        
                          <Icon type="user" className="subMenuUsuario" />
                        }
                      >
                        <Menu.ItemGroup>
                          <Menu.Item key="settings:1"><Icon type="user"/>Profile</Menu.Item>
                          <Menu.Item key="settings:2"><Icon type="setting"/>Settings</Menu.Item>
                          <Menu.Item key="settings:3"><Icon type="logout"/>Logout</Menu.Item>
                        </Menu.ItemGroup>
                      </SubMenu>
                    </Menu>
                  </Col>
                </Row>
              </Header>
              <Content  style={{ background: "#fff"}}>
                  <Route exact path="/Dashboard" component={Dashboard} />
                  <Route exact path="/Expenses" component={Expenses} />
                  <Route exact path="/Income" component={Income} />
                  <Route exact path="/PEL" component={PEL} />
              </Content>
              <Footer style={{ background: '#001529'}} className="footer">© 2019 - Linear Softwares Matemáticos | All rights reserved</Footer>
            </Layout>
          </Layout>
      );
    }
  }
}

// ReactDOM.render(<Navbar />, mountNode);