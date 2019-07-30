import React, { Component } from 'react';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout, Table, Divider, Tag } from 'antd';
import './PEL.css';
const columns = [
    {
      title: 'Revenues',
      dataIndex: 'revenues',
      key: 'revenues',
      render: text => <span>{text}</span>,
      className: 'column'
    },
    {
      title: '2018 Q1',
      dataIndex: 'primeiroValor',
      key: '2018Q1',
    },
    {
      title: '2019 Q1',
      dataIndex: 'segundoValor',
      key: '2019Q1',
    },
];
  
const data = [
    {
      key: '1',
      revenues: 'Content',
      primeiroValor: '6,241',
      segundoValor: '6,635'
    },
    {
      key: '2',
      revenues: 'Sponsorship & Advertising',
      primeiroValor: '2,714',
      segundoValor: '2,974'
    },
    {
      key: '3',
      revenues: 'Merchandising',
      primeiroValor: '2,479',
      segundoValor: '2,352'
    },
    {
      key: '3',
      revenues: 'Others',
      primeiroValor: '211',
      segundoValor: '167'
    },
    {
      key: '4',
      revenues: 'Deductions',
      primeiroValor: '11,645',
      segundoValor: '12,128'
    },
    {
      key: '5',
      revenues: 'Gross Revenue',
      primeiroValor: '-1,077',
      segundoValor: '-1,122'
    },
    {
      key: '6',
      revenues: 'Net Revenue',
      primeiroValor: '10,568',
      segundoValor: '11,006'
    },
    {
      key: '7',
      revenues: 'Expenses	 	 ',
      isTitle: true
    },
    {
      key: '8',
      revenues: 'Sales and Marketing',
      primeiroValor: '-770',
      segundoValor: '-1,796'
    },
    {
      key: '9',
      revenues: 'Meetings and Travel',
      primeiroValor: '-294',
      segundoValor: '-1,796'
    },
    {
      key: '10',
      revenues: 'Event Production and Operations',
      primeiroValor: '-1,204',
      segundoValor: '-3,568'
    },
    {
      key: '11',
      revenues: 'Television Production and Operations',
      primeiroValor: '-1,255',
      segundoValor: '-1,026'
    },
    {
      key: '12',
      revenues: 'Depreciation and Amortization',
      primeiroValor: '-71',
      segundoValor: '-71'
    },
    {
      key: '13',
      revenues: 'Telecommunication & Technology',
      primeiroValor: '-327',
      segundoValor: '-353'
    },
    {
      key: '14',
      revenues: 'Salaries',
      primeiroValor: '-1,600',
      segundoValor: '-1,811'
    },
    {
      key: '15',
      revenues: 'Benefits',
      primeiroValor: '-270',
      segundoValor: '-294'
    },
    {
      key: '16',
      revenues: 'Payroll Expenses',
      primeiroValor: '-266',
      segundoValor: '-304'
    },
    {
      key: '17',
      revenues: 'League Administration',
      primeiroValor: '-196',
      segundoValor: '-196'
    },
    {
      key: '18',
      revenues: 'Corporate Operations',
      primeiroValor: '-474',
      segundoValor: '-474'
    },
    {
      key: '19',
      revenues: 'Office Operations',
      primeiroValor: '-133',
      segundoValor: '-133'
    },
    {
      key: '20',
      revenues: 'Legal',
      primeiroValor: '-181',
      segundoValor: '-182'
    },
    {
      key: '21',
      revenues: 'Third Party License Fees',
      primeiroValor: '-445',
      segundoValor: '-475'
    },
    {
      key: '22',
      revenues: 'Occupancy',
      primeiroValor: '-93',
      segundoValor: '-93'
    },      		
    {
      key: '23',
      revenues: 'Bad Debt',
      primeiroValor: '-22',
      segundoValor: '-22'
    },      		
    {
      key: '24',
      revenues: 'Total Expenses',
      primeiroValor: '-7,602',
      segundoValor: '-11,093',
      isTitle: true
    },   
    {
      key: '25',
      revenues: 'EBIT',
      primeiroValor: '2,966',
      segundoValor: '-87',
      isTitle: true
    },  
];

class PEL extends Component {
  
    render()    {
      const options = [];

      for (var prop in data) {
        if(data[prop].isTitle){
          options.push(
            <tr>
              <th>{data[prop].revenues}</th>
              <th className="tdNumeric">{data[prop].primeiroValor}</th>
              <th className="tdNumeric">{data[prop].segundoValor}</th>
            </tr>
          );
        }
        else{
          options.push(
            <tr>
                <td>{data[prop].revenues}</td>
                <td className="tdNumeric">{data[prop].primeiroValor}</td>
                <td className="tdNumeric">{data[prop].segundoValor}</td>
              </tr>
          );
        }
      }
      return(
        <Card title="P&#38;L (in Thousands) " className="classCard">
          <table id="customers">
            <tr>
              <th>Revenues</th>
              <th  className="tdNumeric">2018 Q1</th>
              <th  className="tdNumeric">2019 Q1</th>
            </tr>
            {options}
          </table>
        </Card>
          
      );
    }
}
export default PEL