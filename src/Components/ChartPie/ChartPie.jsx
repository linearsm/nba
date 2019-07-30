import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import "../ChartPie/ChartPieCSS.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class ChartPie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: 'PieExample',
        }
    };
    componentDidMount() {
      
        let chart = am4core.create(this.props.idDiv, am4charts.PieChart);
                  
        chart.data = this.props.data;
        
        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "Volume";
        pieSeries.dataFields.category = "Division";
        pieSeries.alignLabels = true;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.padding(0,0,0,0);


        pieSeries.labels.template.disabled = false;
        pieSeries.labels.template.fontSize = 12;
        pieSeries.ticks.template.disabled = false;


        var colorSet = new am4core.ColorSet();
        colorSet.list = this.props.colorsPie.map(function(color) {
            return new am4core.color(color);
        });
        pieSeries.colors = colorSet;

    }

    componentDidUpdate() {
        // this.chart.data = this.props.data;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render() {
        return (
            <Card title={this.props.cardTitle} bordered={false} style={{ width: '95%', maxHeight:'5%' }} className="CardPie">
                {/* <Pie data={this.props.data} /> */}
                <div id={this.props.idDiv} style={{ width: "100%", height:"400px"}}></div>
            </Card>
        );
    }
}

export default ChartPie
