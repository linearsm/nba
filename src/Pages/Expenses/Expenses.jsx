import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import ChartBar from './../../Components/ChartBar/ChartBar';
import ChartLine from './../../Components/ChartLine/ChartLine';
import ChartDoughnut from './../../Components/ChartDoughnut/ChartDoughnut';
import ChartWaterfall from './../../Components/ChartWaterfall/ChartWaterfall';

import '../Expenses/ExpensesCSS.css';
const { Content} = Layout;
const graficoPizza = 'Grafico de Pizza';
const graficoPonte = 'Grafico de Ponte';
const graficoBarra = 'Grafico de Barra';
const graficoLinha = 'Grafico de Linha';
class Expenses extends Component {
    constructor(props){
        super(props);
        this.state = {
          data:[
            {
              "month": "Jan",
              "expenses2019": 8442805.5841634,
              "expenses2020":0
            }, 
            {
              "month": "Feb",
              "expenses2019": 8974313.5841634,
              "expenses2020":0
            },
            {
              "month": "Mar",
              "expenses2019": 9187943.5841634,
              "expenses2020":0
            },
            {
              "month": "Apr",
              "expenses2019": 8858292.9361134,
              "expenses2020":0
            },
            {
              "month": "May",
              "expenses2019": 9619740.24620039,
              "expenses2020":0
            }, 
            {
              "month": "Jun",
              "expenses2019": 15712829.5672004,
              "expenses2020":0
            }, 
            {
              "month": "Jul",
              "expenses2019": 11093263.5672004,
              "expenses2020":0
            }, 
            {
              "month": "Aug",
              "expenses2019": 11981441.7928795,
              "expenses2020":0
            }, 
            {
              "month": "Sep",
              "expenses2019": 12762514.4176595,
              "expenses2020":0
            }, 
            {
              "month": "Oct",
              "expenses2019": 8858292.9361134,
              "expenses2020":11822295.1041324
            }, 
            {
              "month": "Nov",
              "expenses2019": 9619740.24620039,
              "expenses2020":7601861
            }, 
            {
              "month": "Dec",
              "expenses2019": 15712829.5672004,
              "expenses2020":7701882
            }
          ],
          dataPie:[
              {
                "departament": "Depreciation and Amortization",
                "value": 847092.77366
              },
              {
                "departament": "Event Production & Operations",
                "value": 35351844.28706
              }, 
              {
                "departament": "Human Resources",
                "value": 28174795.2551412
              }, 
              {
                "departament": "Selling, General and Administrative",
                "value": 43392673.860925
              }, 
              {
                "departament": "Television Production & Operations",
                "value": 15992777.20709
              }
          ],
          dataChartWaterfall: [ {
            category: "2019",
            value: 27126038.1041324,
            open: 0,
            stepValue: 8786,
            color: '#CF093F',
            displayValue: 27126038.1041324,
          }, {
            category: "Depreciation",
            value: 27126038.1041324 - 211773.0457,
            open: 27126038.1041324,
            stepValue: 27126038.1041324 - 211773.0457,
            color: '#DE002D',
            displayValue: 211773.0457
          }, {
            category: "Operating",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            open: 27126038.1041324 - 211773.0457,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            color: '#003AA8',
            displayValue: 6532563.8585884
          }, {
            category: "Production",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            color:'#0478BE',
            displayValue: 10811697
          }, {
            category: "S.G.A",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
            open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
            color:'#B4B3B3',
            displayValue: 9570004.199844
          }],
          colorsPie:["#CF093F", "#DE002D", "#003AA8", "#0478BE", "#B4B3B3"],
          dataLine: {
            labels:  ["January", "February", "March", "April", "May", "June", "July","August","September", "October","November","December"],
            datasets: [
              {
                label: '2019',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(222, 0, 45)',
                borderColor: 'rgba(222, 0, 45)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(180, 179, 179)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(180, 179, 179)',
                pointHoverBorderColor: 'rgba(255, 255, 255)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 30,
                data: [8449080.5841634,
                  8985013.5841634,
                  1000943.5841634,
                  9908292.9361134,0,0,0,0,0,7601861, 7701882, 11822295.1041324]
              },
              {
                label: '2020',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0, 58, 168)',
                borderColor: 'rgba(0, 58, 168)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(180, 179, 179)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(180, 179, 179)',
                pointHoverBorderColor: 'rgba(255, 255, 255)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 30,
                data: [
                  8442805.5841634,
                  8974313.5841634,
                  9187943.5841634,
                  8858292.9361134,
                  9619740.24620039,
                  15712829.5672004,
                  11093263.5672004,
                  11981441.7928795,
                  12762514.4176595
                ]
              }
            ]
          },  
          TituloGraficoBarra: graficoBarra,
          TituloGraficoPizza: graficoPizza,
          TituloGraficoLinha: graficoLinha,
          TituloGraficoPonte: graficoPonte,
        }  
    }
    
    handleLanguage = (langValue, titulo) => {
      this.setState({
        TituloGraficoPizza: graficoPizza,
      })
      if(langValue === "Depreciation and Amortization"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - Depreciation and Amortization',
          data:[
            {
              "month": "Jan",
              "expenses2019": 9962136,
              "expenses2020": 8442805.5841634	
            }, 
            {
              "month": "Feb",
              "expenses2019": 3273151,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 9121940,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 23063834,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6925739,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 6656008,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 4040190,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 2700188,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 6443445,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 2605437,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 5362877,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 9636078,
              "expenses2020":8858292.9361134
            }
          ],
        });  

      }
      else if(langValue === "Event Production & Operations")
      {
        this.setState ({
          TituloGraficoBarra: graficoBarra + " - Event Production & Operations",
          data:[
            {
              "month": "Jan",
              "expenses2019": 2444900,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 4275424,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 9894035,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 8313807,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 3085471,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 8574317,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 1058878,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 6791774,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 1176327,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 5563217,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 4085816,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 9636078,
              "expenses2020":8858292.9361134
            }
          ],
        }); 
      }
      else if(langValue === "Human Resources"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + " - Human Resources",
          data:[
            {
              "month": "Jan",
              "expenses2019": 7137437,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 8691304,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 994954,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 4694361,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6111173,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 8537082,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 2089710,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 1978811,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 2176543,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 6617682,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 8895442,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 974250,
              "expenses2020":8858292.9361134
            }
          ],
        }); 
      }
      else if(langValue === "Selling, General and Administrative"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + " - Selling, General and Administrative",
          data:[
            {
              "month": "Jan",
              "expenses2019": 5990788,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 7115307,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 8693801,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 5620083,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6102377,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 580109,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 5745515,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 7782620,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 2769329,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 8368609,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 4685765,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 8324109,
              "expenses2020":8858292.9361134
            }
          ],
        }); 

      }
      else if(langValue === "Television Production & Operations"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + " - Television Production & Operations",
          data:[
            {
              "month": "Jan",
              "expenses2019": 6902559,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 7104301,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 5402873,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 4440993,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6419724,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 6876382,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 231408,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 937316,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 6453543,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 3132041,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 3510246,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 8742612,
              "expenses2020":8858292.9361134
            }
          ],
        }); 
      }
    }

    handleClickMonth = (langValue, titulo) => {
      this.setState({
        TituloGraficoBarra: graficoBarra
      });
      if(langValue === "Jan"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - January",
          TituloGraficoPizza: graficoPizza + " - January",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 4599944
            },
            {
              "departament": "Event Production & Operations",
              "value": 3382701
            }, 
            {
              "departament": "Human Resources",
              "value": 1851166
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 2439438
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 1501406
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 211773.0457,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 211773.0457,
              color: '#DE002D',
              displayValue: 211773.0457
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              open: 27126038.1041324 - 211773.0457,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
              color:'#B4B3B3',
              displayValue: 9570004.199844
            }
          ],
        });
      }
      else if(langValue === "Feb"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - February",
          TituloGraficoPizza: graficoPizza + " - February",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 4298958
            },
            {
              "departament": "Event Production & Operations",
              "value": 5647693
            }, 
            {
              "departament": "Human Resources",
              "value": 3508571
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 4854773
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 2169526
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 -  4532563.8585884,
              color: '#DE002D',
              displayValue:  4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 -  4532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });
      }
      else if(langValue === "Mar"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - March",
          TituloGraficoPizza: graficoPizza + " - March",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 41539250
            },
            {
              "departament": "Event Production & Operations",
              "value": 1297719
            }, 
            {
              "departament": "Human Resources",
              "value": 2636042
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 9790411
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 9445489
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 4532563.8585884,
              color: '#DE002D',
              displayValue: 4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 - 4532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              open: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              color:'#0478BE',
              displayValue: 8811697
            },
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });
      }
      else if(langValue === "Apr"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - April",
          TituloGraficoPizza: graficoPizza + " - April",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 4126046
            },
            {
              "departament": "Event Production & Operations",
              "value": 2460110
            }, 
            {
              "departament": "Human Resources",
              "value": 9969683
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 3639447
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 8881617
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 211773.0457,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 211773.0457,
              color: '#DE002D',
              displayValue: 211773.0457
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              open: 27126038.1041324 - 211773.0457,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
              color:'#B4B3B3',
              displayValue: 9570004.199844
            }
          ],
        });
      }
      else if(langValue === "May"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - May",
          TituloGraficoPizza: graficoPizza + " - May",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 8772510
            },
            {
              "departament": "Event Production & Operations",
              "value": 5025237
            }, 
            {
              "departament": "Human Resources",
              "value": 9055894
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 5009348
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 9170609
            }
          ],
          
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 -  4532563.8585884,
              color: '#DE002D',
              displayValue:  4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 -  4532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });
      }
      else if(langValue === "Jun"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - June",
          TituloGraficoPizza: graficoPizza + " - June",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 9062853
            },
            {
              "departament": "Event Production & Operations",
              "value": 412686
            }, 
            {
              "departament": "Human Resources",
              "value": 8094646
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 9059902
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 949048
            }
          ],
          
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 4532563.8585884,
              color: '#DE002D',
              displayValue: 4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 - 4532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              open: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              color:'#0478BE',
              displayValue: 8811697
            },
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });  
      }
      else if(langValue === "Jul"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - July",
          TituloGraficoPizza: graficoPizza + " - July",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 6316976
            },
            {
              "departament": "Event Production & Operations",
              "value": 1557183
            }, 
            {
              "departament": "Human Resources",
              "value": 1966761
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 6619020
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 3692053
            }
          ],
          
          dataChartWaterfall: [ {
            category: "2019",
            value: 27126038.1041324,
            open: 0,
            stepValue: 8786,
            color: '#CF093F',
            displayValue: 27126038.1041324,
          }, {
            category: "Depreciation",
            value: 27126038.1041324 - 211773.0457,
            open: 27126038.1041324,
            stepValue: 27126038.1041324 - 211773.0457,
            color: '#DE002D',
            displayValue: 211773.0457
          }, {
            category: "Operating",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            open: 27126038.1041324 - 211773.0457,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            color: '#003AA8',
            displayValue: 6532563.8585884
          }, {
            category: "Production",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            color:'#0478BE',
            displayValue: 10811697
          }, {
            category: "S.G.A",
            value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
            open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
            stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
            color:'#B4B3B3',
            displayValue: 9570004.199844
          }],
        }); 
      }
      else if(langValue === "Aug"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - August",
          TituloGraficoPizza: graficoPizza + " - August",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 5398906
            },
            {
              "departament": "Event Production & Operations",
              "value": 3591008
            }, 
            {
              "departament": "Human Resources",
              "value": 7116531
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 9208706
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 9517923
            }
          ],
          
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 211773.0457,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 211773.0457,
              color: '#DE002D',
              displayValue: 211773.0457
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              open: 27126038.1041324 - 211773.0457,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
              color:'#B4B3B3',
              displayValue: 9570004.199844
            }
          ],
        });
      }
      else if(langValue === "Sep"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - September",
          TituloGraficoPizza: graficoPizza + " - September",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 1684206
            },
            {
              "departament": "Event Production & Operations",
              "value": 2003119
            }, 
            {
              "departament": "Human Resources",
              "value": 4456500
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 4137656
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 4593660
            }
          ], 
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 -  4532563.8585884,
              color: '#DE002D',
              displayValue:  4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 -  4532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        }); 
      }
      else if(langValue === "Oct"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - October",
          TituloGraficoPizza: graficoPizza + " - October",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 3124138
            },
            {
              "departament": "Event Production & Operations",
              "value": 6352457
            }, 
            {
              "departament": "Human Resources",
              "value": 9817565
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 880971
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 7579374
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 4532563.8585884,
              color: '#DE002D',
              displayValue: 4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 - 4532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              open: 27126038.1041324 - 4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 - 4532563.8585884 - 6532563.8585884 - 8811697,
              color:'#0478BE',
              displayValue: 8811697
            },
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 8811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });
      }
      else if(langValue === "Nov"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - November",
          TituloGraficoPizza: graficoPizza + " - November",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 4971778
            },
            {
              "departament": "Event Production & Operations",
              "value": 8640649
            }, 
            {
              "departament": "Human Resources",
              "value": 1602600
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 9681349
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 8777808
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 211773.0457,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 - 211773.0457,
              color: '#DE002D',
              displayValue: 211773.0457
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              open: 27126038.1041324 - 211773.0457,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844 ,
              open: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 - 211773.0457 - 6532563.8585884 - 10811697 - 9570004.199844,
              color:'#B4B3B3',
              displayValue: 9570004.199844
            }
          ],
        });
      }
      else if(langValue === "Dec"){
        this.setState({
          TituloGraficoPonte: graficoPonte + " - December",
          TituloGraficoPizza: graficoPizza + " - December",
          dataPie:[
            {
              "departament": "Depreciation and Amortization",
              "value": 8882946
            },
            {
              "departament": "Event Production & Operations",
              "value": 3723662
            }, 
            {
              "departament": "Human Resources",
              "value": 5354354
            }, 
            {
              "departament": "Selling, General and Administrative",
              "value": 308572
            }, 
            {
              "departament": "Television Production & Operations",
              "value": 459439
            }
          ],
          dataChartWaterfall: [ 
            {
              category: "2019",
              value: 27126038.1041324,
              open: 0,
              stepValue: 8786,
              color: '#CF093F',
              displayValue: 27126038.1041324,
            }, 
            {
              category: "Depreciation",
              value: 27126038.1041324 - 4532563.8585884,
              open: 27126038.1041324,
              stepValue: 27126038.1041324 -  4532563.8585884,
              color: '#DE002D',
              displayValue:  4532563.8585884
            }, 
            {
              category: "Operating",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              open: 27126038.1041324 -  4532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              color: '#003AA8',
              displayValue: 6532563.8585884
            }, 
            {
              category: "Production",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              color:'#0478BE',
              displayValue: 10811697
            }, 
            {
              category: "S.G.A",
              value: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844 ,
              open: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697,
              stepValue: 27126038.1041324 -  4532563.8585884 - 6532563.8585884 - 10811697 - 1570004.199844,
              color:'#B4B3B3',
              displayValue: 1570004.199844
            }
          ],
        });
      }
    }
    handleWaterfall = (langValue, titulo) => {
      this.setState({
        TituloGraficoPizza: graficoPizza
      });
      if(langValue === "2019"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - 2019',
          data:[
            {
              "month": "Jan",
              "expenses2019": 9962136,
              "expenses2020": 8442805.5841634	
            }, 
            {
              "month": "Feb",
              "expenses2019": 3273151,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 9121940,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 23063834,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6925739,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 6656008,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 4040190,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 2700188,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 6443445,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 2605437,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 5362877,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 9636078,
              "expenses2020":8858292.9361134
            }
          ],
        });  
      }
      else if(langValue === "Depreciation")
      {
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - Depreciation',
          data:[
            {
              "month": "Jan",
              "expenses2019": 2444900,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 4275424,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 9894035,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 8313807,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 3085471,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 8574317,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 1058878,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 6791774,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 1176327,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 5563217,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 4085816,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 9636078,
              "expenses2020":8858292.9361134
            }
          ],
        });   
      }
      else if(langValue === "Operating"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - Operating',
          data:[
            {
              "month": "Jan",
              "expenses2019": 7137437,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 8691304,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 994954,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 4694361,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6111173,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 8537082,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 2089710,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 1978811,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 2176543,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 6617682,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 8895442,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 974250,
              "expenses2020":8858292.9361134
            }
          ],
        });  
      }
      else if(langValue === "Production"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - Production',
          data:[
            {
              "month": "Jan",
              "expenses2019": 6902559,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 7104301,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 5402873,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 4440993,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6419724,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 6876382,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 231408,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 937316,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 6453543,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 3132041,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 3510246,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 8742612,
              "expenses2020":8858292.9361134
            }
          ],
        }); 
        
      }
      else if(langValue === "S.G.A"){
        this.setState ({
          TituloGraficoBarra: graficoBarra + ' - S.G.A',
          data:[
            {
              "month": "Jan",
              "expenses2019": 5990788,
              "expenses2020": 8442805.5841634		
            }, 
            {
              "month": "Feb",
              "expenses2019": 7115307,
              "expenses2020": 8974313.5841634
            },
            {
              "month": "Mar",
              "expenses2019": 8693801,
              "expenses2020": 9187943.5841634
            },
            {
              "month": "Apr",
              "expenses2019": 5620083,
              "expenses2020": 8858292.9361134
            },
            {
              "month": "May",
              "expenses2019": 6102377,
              "expenses2020": 15712829.5672004
            }, 
            {
              "month": "Jun",
              "expenses2019": 580109,
              "expenses2020": 11093263.5672004
            }, 
            {
              "month": "Jul",
              "expenses2019": 5745515,
              "expenses2020": 11981441.7928795
            }, 
            {
              "month": "Aug",
              "expenses2019": 7782620,
              "expenses2020": 12762514.4176595
            }, 
            {
              "month": "Sep",
              "expenses2019": 2769329,
              "expenses2020": 8858292.9361134
            }, 
            {
              "month": "Oct",
              "expenses2019": 8368609,
              "expenses2020": 9619740.24620039
            }, 
            {
              "month": "Nov",
              "expenses2019": 4685765,
              "expenses2020":15712829.5672004
            }, 
            {
              "month": "Dec",
              "expenses2019": 8324109,
              "expenses2020":8858292.9361134
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
                  <Col span={12}>
                      <ChartBar data={this.state.data}  onClick={this.handleClickMonth}  idDiv="chartBar"  cardTitle ={this.state.TituloGraficoBarra}/>
                  </Col>
                  <Col span={12}>
                      <ChartLine  data={this.state.dataLine} cardTitle ={this.state.TituloGraficoLinha}/>
                  </Col>
              </Row>
              <Row>
                  <Col span={12}>
                      <ChartDoughnut data={this.state.dataPie}  onClick={this.handleLanguage} cardTitle ={this.state.TituloGraficoPizza} idDiv="grafico2" colorsPie={this.state.colorsPie}/>
                  </Col>
                  <Col span={12}>
                      <ChartWaterfall data={this.state.dataChartWaterfall} cardTitle ={this.state.TituloGraficoPonte} onClick={this.handleWaterfall}  /> 
                  </Col>
              </Row>
            </Content>
          </Layout>
        );
    }
}
export default Expenses