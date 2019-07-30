import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import '../ChartBar/ChartBarCSS.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class ChartBar extends Component {
    constructor(props){
        super(props);
      
    }
    handleLangChange = (teste) => {
        this.props.onClick(teste, this.props.cardTitle);   
    }
    componentDidMount() {
        let chart = am4core.create(this.props.idDiv, am4charts.XYChart);
        chart.data = this.props.data;

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "month";
        // categoryAxis.title.text = "Local country offices";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        
        let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        // valueAxis.title.text = "Expenditure (M)";
        

        chart.colors.list = [
            am4core.color("#006BB8"),
            am4core.color("#17408B"),
        ];

        // Create series
        function createSeries(field, name, stacked, context) {
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "month";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
            series.stacked = stacked;
            series.columns.template.width = am4core.percent(95);
            series.columns.template.events.on(
                "hit",
                ev => {
                    let a = ev.target;
                    context.handleLangChange(ev.target._dataItem.dataContext["month"]);
                },
            );
    
        }
        
        createSeries("expenses2019", "Expenses", false, this);
        createSeries("expenses2020", "Expenses", false, this);
        this.chart = chart;
    }

    handleLangChange = (teste) => {
        this.props.onClick(teste, "");            
    }

    componentDidUpdate() {
        this.chart.data = this.props.data;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render()    {
        return(

            <Card title={this.props.cardTitle} bordered={false} style={{ width: '95%', height:'100%' }} className="Card">
                <div id={this.props.idDiv} style={{ width: "100%", height:"400px"}}></div>
            </Card>

        );
    }
}
export default ChartBar