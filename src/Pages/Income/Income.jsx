import React, { Component } from 'react';
import {  Col, Row, Card, Layout } from 'antd';
import ChartDoughnut from './../../Components/ChartDoughnut/ChartDoughnut';
import ChartBarHorizontal from './../../Components/ChartBarHorizontal/ChartBarHorizontal';
import ChartWaterfall from './../../Components/ChartWaterfall/ChartWaterfall';
import ChartFunnel from './../../Components/ChartFunnel/ChartFunnel';

import '../Income/IncomeCSS.css'
const { Content} = Layout;
const dataTeste =[ {
  category: "Net revenue",
  value: 8786,
  open: 0,
  stepValue: 8786,
  color: '#9D2235',
  displayValue: 8786
}, {
  category: "Cost of sales",
  value: 8786 - 2786,
  open: 8786,
  stepValue: 8786 - 2786,
  color: '#DE002D',
  displayValue: 2786
}, {
  category: "Operating expenses",
  value: 8786 - 2786 - 1786,
  open: 8786 - 2786,
  stepValue: 8786 - 2786 - 1786,
  color: '#003AA8',
  displayValue: 1786
}, {
  category: "Amortisation",
  value: 8786 - 2786 - 1786 - 453,
  open: 8786 - 2786 - 1786,
  stepValue: 8786 - 2786 - 1786 - 453,
  color:'#0478BE',
  displayValue: 453
}, {
  category: "Income from equity",
  value: 8786 - 2786 - 1786 - 453 + 1465,
  open: 8786 - 2786 - 1786 - 453,
  stepValue: 8786 - 2786 - 1786 - 453 + 1465,
  color: '#B4B3B3',
  displayValue: 1465
}];

const graficoFunil = 'Grafico Funil';
const graficoPizzaUm = '20001 - Apparel and Sporting Goods';
const graficoPizzaDois = 'Fantasy & Gaming';
const graficoPizzaTres = 'Marketing Partnerships';
const graficoPonte = 'Grafico Ponte';
const graficoBarra = 'Grafico Barra'
class Income extends Component {
    constructor(props){
      super(props);
      this.state = {
        TituloGraficoFunuil: graficoFunil,
        TituloGraficoPizzaUm: graficoPizzaUm,
        TituloGraficoPizzaDois: graficoPizzaDois,
        TituloGraficoPizzaTres: graficoPizzaTres,
        TituloGraficoBarra: graficoBarra,
        TituloGraficoPonte: graficoPonte,
        Departamentotual: '',
        colorBar:["#CF093F"],
        dataBrasil:{
          Titulo: '20001 - Apparel and Sporting Goods',
          data: [
            {
              "departament": "Contracted",
              "value": 75
            },
            {
              "departament": "Deal in progress",
              "value": 84
            }, 
            {
              "departament": "To go",
              "value": 81
            },
          ]
        },
        dataMexico:{
          Titulo: 'Fantasy & Gaming',
          data: [
            {
              "departament": "Contracted",
              "value": 9
            },
            {
              "departament": "Deal in progress",
              "value": 2
            }, 
            {
              "departament": "To go",
              "value": 1
            },
          ]
        },
        dataFunnel:[
        ],
        dataRola:{
          Titulo: 'Marketing Partnerships',
          data: [
            {
              "departament": "Contracted",
              "value": 21
            },
            {
              "departament": "Deal in progress",
              "value": 20
            }, 
            {
              "departament": "To go",
              "value": 19
            },
          ]
        },
        dataHorizontal:[
          {
            "contract": 'Unknown Product',
            "value": 184227.228,
          }, 
          {
            "contract": 'ESPN, INC.',
            "value": 75334.89,
          },
          {
            "contract": 'Globosat',
            "value": 27563.796,
          },
          {
            "contract": 'SPORTRADAR AG',
            "value": 52699,
          },
          {
            "contract": 'Investment Funds',
            "value": 97815.9045,
          },
          {
            "contract": 'Televisa',
            "value": 43411.4124,
          },
          {
            "contract": 'TAKE 2 INTERACTIVE',
            "value": 13963.580,
          }
        ],
        language:'',
        colorsPie:["#1E6194", "#DE002D", "#B4B3B3", "#A0A3A3"],
        colorsPie2:["#CF093F", "#DE002D", "#003AA8", "#0478BE"],
        colorsPie3:["#1E6194", "#DE002D", "#003AA8", "#A0A3A3"]
      }  
    }

    handleLanguage = (langValue, titulo) => {
      this.setState({
        Departamentotual: titulo
      });
      if(langValue === "Contracted"){ 
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - ' + titulo + ' - Contracted' ,
          colorBar:["#1E6194"],
          dataHorizontal:[
            {
              "contract": 'Unknown Product',
              "value": 712864.228,
            }, 
            {
              "contract": 'ESPN, INC.',
              "value": 2122.89,
            },
            {
              "contract": 'Globosat',
              "value": 14667.796,
            },
            {
              "contract": 'SPORTRADAR AG',
              "value": 2139,
            },
            {
              "contract": 'Investment Funds',
              "value": 7197815.9045,
            },
            {
              "contract": 'Televisa',
              "value": 1585800.4124,
            },
            {
              "contract": 'TAKE 2 INTERACTIVE',
              "value": 1238436.580,
            }
          ],
        });  
      }
      else if(langValue === "Deal in progress")
      {
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - ' + titulo + ' - Deal in progress' ,
          colorBar: ["#DE002D"] ,
          dataHorizontal:[
            {
              "contract": 'Unknown Product',
              "value": 626242.228,
            }, 
            {
              "contract": 'ESPN, INC.',
              "value": 658010.89,
            },
            {
              "contract": 'NIKE,INC',
              "value": 396450.796,
            },
            {
              "contract": 'SPORTRADAR AG',
              "value": 2139,
            },
            {
              "contract": 'NEW ERA CAP COMPANY',
              "value": 393304.9045,
            },
          ],
        });  
      }
      else if(langValue === "To go"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - ' + titulo + ' - To go' ,
          colorBar: ["#B4B3B3"],
          dataHorizontal:[
            {
              "contract": 'Unknown Product',
              "value": 1316022,
            }, 
            {
              "contract": 'Spalding.',
              "value": 726271.89,
            },
            {
              "contract": 'NIKE,INC',
              "value": 463632.796,
            },
            {
              "contract": 'SPORTRADAR AG',
              "value": 619218,
            },
            {
              "contract": 'NEW ERA CAP COMPANY',
              "value": 553491.9045,
            },
          ],
        });  
      }
    }
    
    handleWaterfall = (langValue, titulo) => {
      alert(langValue + ", " + titulo);
    }
    
    handleFunnel = (langValue, titulo) => {
      alert(langValue + ", " + titulo);
    }
    handleBar = (langValue, titulo) => {
      this.setState({
        TituloGraficoFunuil: graficoFunil + ' - '  + this.state.Departamentotual  + ' - ' + langValue
      });
      if(langValue == "Unknown Product"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "TAKE 2 INTERACTIVE"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 16022
            },
            {
              "name": "P&L",
              "value": 1016022
            },
            {
              "name": "Contratado",
              "value": 13160
            },
            {
              "name": "Orçamento",
              "value": 1316022
            }
          ],
        });

      }
      else if(langValue == "Televisa"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 1000
            },
            {
              "name": "P&L",
              "value": 0
            },
            {
              "name": "Contratado",
              "value": 9000
            },
            {
              "name": "Orçamento",
              "value": 10000
            }
          ],
        });
      }
      else if(langValue == "Investment Funds"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 2500
            },
            {
              "name": "P&L",
              "value": 2000
            },
            {
              "name": "Contratado",
              "value": 1500
            },
            {
              "name": "Orçamento",
              "value": 8000
            }
          ],
        });
      }
      else if(langValue == "SPORTRADAR AG"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "Globosat"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "ESPN, INC."){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "NIKE,INC"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "NEW ERA CAP COMPANY"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
      else if(langValue == "Spalding"){
        this.setState({
          dataFunnel:[
            {
              "name": "To Go",
              "value": 600
            },
            {
              "name": "P&L",
              "value": 300
            },
            {
              "name": "Contratado",
              "value": 200
            },
            {
              "name": "Orçamento",
              "value": 180
            }
          ],
        });
      }
    }
    render(){
      return(
        <Layout style={{ background: '#FFFF'}}>
          <Content className="content">
            <Row>
                <Col span={24}>
                  <Col span={8}>
                    <ChartDoughnut data={this.state.dataBrasil.data} cardTitle={this.state.TituloGraficoPizzaUm}
                      onClick={this.handleLanguage} idDiv="grafico1" colorsPie={this.state.colorsPie}
                    />
                  </Col>
                  <Col span={8}>
                    <ChartDoughnut data={this.state.dataMexico.data} cardTitle={this.state.TituloGraficoPizzaDois}
                      onClick={this.handleLanguage} idDiv="grafico3" colorsPie={this.state.colorsPie2}
                    />
                  </Col>
                  <Col span={8}>
                    <ChartDoughnut data={this.state.dataRola.data} cardTitle={this.state.TituloGraficoPizzaTres}
                      onClick={this.handleLanguage} idDiv="grafico4" colorsPie={this.state.colorsPie3}
                    />
                  </Col>
                </Col>
            </Row>     
            <Row>
              <Col span={12}>
                <ChartBarHorizontal data={this.state.dataHorizontal} cardTitle={this.state.TituloGraficoBarra} idDiv="graficoBarra" colorBar={this.state.colorBar}
                  onClick={this.handleBar}/>
              </Col>         

              <Col span={12}>
                <ChartWaterfall data={dataTeste} cardTitle={this.state.TituloGraficoPonte} onClick={this.handleWaterfall} /> 
              </Col>  
            </Row>  
            <Row>
              <Col span={12}>
                <ChartFunnel data={this.state.dataFunnel} cardTitle={this.state.TituloGraficoFunuil} onClick={this.handleFunnel} /> 
              </Col>  
            </Row>  
          </Content>
        </Layout> 
    );
  }
}
export default Income