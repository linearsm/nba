import React from 'react';
import { Collapse, Icon, Input, Button, Alert, Col, Row, Card, Layout, Table, Divider, Tag } from 'antd';
import ChartBarHorizontal from './../../Components/ChartBarHorizontalDashBoard/ChartBarHorizontal';
import ChartPie from '../../Components/ChartPie/ChartPie';
import MiniChartBar from '../../Components/MiniChartBar/MiniChartBar';
import MiniChartLine from '../../Components/MiniChartLine/MiniChartLine';
import "./dashboard.css";
import { func } from 'prop-types';
const { Panel } = Collapse;
const { Content} = Layout;
function callback(key) {
    console.log(key);
}
function getDate(){
    let date;
    let data = [];
    let value = 50;
    for(let i = 0; i < 20; i++){
        date= new Date();
        date.setHours(0,0,0,0);
        date.setDate(i);
        value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({date:date, value: value});
    }
    return data;
}
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colorBarTop: ["#17408B"],
            colorBarBottom: ["#C9082A"],
            dataHorizontal:[
                {
                    "contract": "GOOGLE",
                    "value": 405
                }, 
                {
                    "contract": "RECORD",
                    "value": 367
                }, 
                {
                    "contract": "Editora Global",
                    "value": 214
                }, 
                {
                    "contract": "PANINI",
                    "value": 110
                }, 
                {
                    "contract": "CULTURA",
                    "value": 54
                }
            ],
            dataBrasil:{
                Titulo: '20001 - Apparel and Sporting Goods',
                labels: [
                  'Contracted',
                  'Deal in progress',
                  'To go'
                ],
                datasets: [{
                  data: [75, 84, 81],
                  backgroundColor: [
                    '#CF093F',
                    '#B4B3B3',
                    '#003AA8',
                  ],
                  hoverBackgroundColor: [
                    '#CF093F',
                    '#B4B3B3',
                    '#003AA8',
                  ]
                }]
            },
            dataPie: {
                Titulo: 'Revenue (in Millions)',
                dataProvider: [ 
                    {
                        "Division": "Sponsorship & Advertising",
                        "Volume": 56
                    }, 
                    {
                        "Division": "Merchandising",
                        "Volume": 33
                    }, 
                    {
                        "Division": "Other",
                        "Volume": 9
                    }, 
                    {
                        "Division": "Content",
                        "Volume": 21
                    }
                ]
            },
            dataPie2: {
                Titulo: 'Expenses (in Millions)',
                dataProvider:[ 
                    {
                        "Division": "Selling, General and Administrative",
                        "Volume": 34
                    }, 
                    {
                        "Division": "Production and Operations",
                        "Volume": 10
                    }, 
                    {
                        "Division": "Depreciation and Amortization",
                        "Volume": 17
                    }, 
                    {
                        "Division": "Human Resources",
                        "Volume": 31
                    }
                ],
            },
            dataHorizontal2:{
                Titulo: 'Revenue (in Thousands)',
                data: [
                    {
                        "contract": "GLOBAL",
                        "value": 5456
                    }, 
                    {
                        "contract": "LATAM",
                        "value": 11274
                    }
                ]
            },
            dataHorizontal3:{
                Titulo: 'Expenses (in Thousands)',
                data:[
                    {
                        "contract": "GLOBAL",
                        "value": 678
                    }, 
                    {
                        "contract": "LATAM",
                        "value": 4577
                    }
                ]
            },
            colorsPie:["#002D62", "#006BB6", "#C8102E", "#BEC0C2" ],
            data: [
                {
                    key: '1',
                    departament: '20431 - Marketing Partnerships',
                    forecastValue: 23.244,
                    share: '12,3%',
                    valueThousands: '',
                    historyBehavior: '',
                    miniChartBar: [{
                        "contract": "",
                        "value": 24000
                    }],
                    miniChartLine: getDate(),
                },
                {
                    key: '2',
                    departament: '40803 - Marketing',
                    forecastValue: 22.800,
                    share: '11,1%',
                    valueThousands: '',
                    historyBehavior: '',
                    miniChartBar: [{
                        "contract": "",
                        "value": 24000
                    }],
                    miniChartLine: getDate(),
                },
                {
                    key: '3',
                    departament: '10301 - Basketball Operations',
                    forecastValue: 18.900,
                    share: '8,7%',
                    valueThousands: '',
                    historyBehavior: '',
                    miniChartBar: [{
                        "contract": "",
                        "value": 24000
                    }],
                    miniChartLine: getDate(),
                },
                {
                    key: '4',
                    departament: '29994 - International HQ',
                    forecastValue: 16.130,
                    share: '7,6%',
                    valueThousands: '',
                    historyBehavior: '',
                    miniChartBar: [{
                        "contract": "",
                        "value": 24000
                    }],
                    miniChartLine: getDate(),
                },
                {
                    key: '5',
                    departament: '90200 - Finance',
                    forecastValue: 13.232,
                    share: '5,2%',
                    valueThousands: '',
                    historyBehavior: '',
                    miniChartBar: [{
                        "contract": "",
                        "value": 24000
                    }],
                    miniChartLine: getDate(),   
                },
            ],
            
        }  
    }
    handleLanguage = (langValue, titulo) => {
        //alert("Teste:" + langValue);
        this.setState({language: langValue});
        
    }

    render() {
        const options = [];

        for (var prop in this.state.data) {    
            var id = 'miniChartBar_' + this.state.data[prop].key;
            var idLine = 'miniChartLine_' + this.state.data[prop].key;
            options.push(
                <tr>
                    <td className="tdDepartamento">{this.state.data[prop].departament}</td>
                    <td className="tdNumeric">{this.state.data[prop].forecastValue}</td>
                    <td className="tdNumeric">{this.state.data[prop].share}</td>
                    <td className="tdGrafico">
                        <MiniChartBar data={this.state.data[prop].miniChartBar} idDiv={id} />
                    </td>
                    <td className="tdGrafico">
                        <MiniChartLine data={this.state.data[prop].miniChartLine} idDiv={idLine}/>
                    </td>
                </tr>
            );
        }

        return (
            <Layout style={{ background: '#FFFF'}}>
                <Content className="content">
                    <Row>
                        <Col span={12}>
                            <Collapse defaultActiveKey={['1']} onChange={callback} className="classCollapse">
                                <Panel header="P&#38;L KEY METRICS" key="1" className="panel">
                                    <Row>
                                        <Col span={12}>
                                            <span>Teste</span>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </Col>
                        <Col span={12}>
                            <Collapse defaultActiveKey={['1']} onChange={callback} className="classCollapse">
                                <Panel header="TOP AND BOTTOM CONTRACTS" key="1">
                                    <Row>
                                        <Col span={24}>
                                            <Card title="Top Contracts (in Thousands)" bordered={false} style={{ width: '95%', height:'100%' }} className="Card">
                                                <ChartBarHorizontal data={this.state.dataHorizontal} idDiv="topContracts" colorBar={this.state.colorBarTop}/>
                                            </Card>
                                            <Card title="Bottom Contracts (in Thousands)" bordered={false} style={{ width: '95%', height:'100%' }} className="Card">
                                                <ChartBarHorizontal data={this.state.dataHorizontal} idDiv="bottomContracts" colorBar={this.state.colorBarBottom}/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Collapse defaultActiveKey={['1']} onChange={callback} className="classCollapseMaior">
                                <Panel header="DEPARTMENT'S REVENUE AND EXPENSES" key="1">
                                    <Col span={12}>
                                        <ChartPie data={this.state.dataPie.dataProvider} cardTitle={this.state.dataPie.Titulo} idDiv="RevenuePie" colorsPie={this.state.colorsPie}/>
                                    </Col>
                                    <Col span={12}>
                                        <ChartPie data={this.state.dataPie2.dataProvider} cardTitle={this.state.dataPie2.Titulo} idDiv="ExpensesPie" colorsPie={this.state.colorsPie}/>
                                    </Col>
                                </Panel>
                                <Panel header="GLOBAL AND LATAM DISCRIMINATION" key="2" >
                                    <Col span={12}>
                                        <ChartBarHorizontal data={this.state.dataHorizontal2.data} idDiv="RevenueThousands" colorBar={this.state.colorBarTop} cardTitle={this.state.dataHorizontal2.Titulo}/>
                                    </Col>
                                    <Col span={12}>
                                        <ChartBarHorizontal data={this.state.dataHorizontal3.data} idDiv="ExpensesThousands" colorBar={this.state.colorBarBottom} cardTitle={this.state.dataHorizontal3.Titulo}/>
                                    </Col>
                                </Panel>
                                <Panel header="TOP 5 EXPENSES IN HUMAN RESOURCES" key="3" >
                                    <table id="humanResources">
                                        <tr>
                                            <th className="tdDepartamento">Department</th>
                                            <th className="tdNumeric">Forecast Value (in thousands)</th>
                                            <th className="tdNumeric">Share</th>
                                            <th className="tdGrafico">Value (in thousands)</th>
                                            <th className="tdGrafico">History Behavior</th>
                                        </tr>
                                        {options}
                                    </table>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default Dashboard