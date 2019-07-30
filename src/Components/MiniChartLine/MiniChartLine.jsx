import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../ChartLine/ChartLineCSS.css";
am4core.useTheme(am4themes_animated);

class MiniChartLine extends Component {
    constructor(props){
        super(props);
      
    }
    
    componentDidMount() {
        let chart = am4core.create(this.props.idDiv, am4charts.XYChart);

        let data = [];
		let value = 50;
		for(let i = 0; i < 20; i++){
			let date = new Date();
			date.setHours(0,0,0,0);
			date.setDate(i);
			value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
			data.push({date:date, value: value});
		}
        //alert(JSON.stringify(this.props.data));
        // Add data
        chart.data = this.props.data;
        //chart.data = data;
        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.disabled = true;
        //dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}"

        series.tooltip.pointerOrientation = "vertical";

        // // Create category axis
        // let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        // categoryAxis.dataFields.category = "year";
        // categoryAxis.renderer.opposite = true;
        
        // // Create value axis
        // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // valueAxis.renderer.inversed = true;
        // valueAxis.title.text = "Place taken";
        // valueAxis.renderer.minLabelPosition = 0.01;
        
        // // Create series
        // let series1 = chart.series.push(new am4charts.LineSeries());
        // series1.dataFields.valueY = "italy";
        // series1.dataFields.categoryX = "year";
        // series1.name = "Italy";
        // series1.strokeWidth = 3;
        // series1.bullets.push(new am4charts.CircleBullet());
        // series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        // series1.legendSettings.valueText = "{valueY}";
        // series1.visible  = false;
        
        // let series2 = chart.series.push(new am4charts.LineSeries());
        // series2.dataFields.valueY = "germany";
        // series2.dataFields.categoryX = "year";
        // series2.name = 'Germany';
        // series2.strokeWidth = 3;
        // series2.bullets.push(new am4charts.CircleBullet());
        // series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        // series2.legendSettings.valueText = "{valueY}";
        
        // let series3 = chart.series.push(new am4charts.LineSeries());
        // series3.dataFields.valueY = "uk";
        // series3.dataFields.categoryX = "year";
        // series3.name = 'United Kingdom';
        // series3.strokeWidth = 3;
        // series3.bullets.push(new am4charts.CircleBullet());
        // series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        // series3.legendSettings.valueText = "{valueY}";
        
        // // Add chart cursor
        // chart.cursor = new am4charts.XYCursor();
        // chart.cursor.behavior = "zoomY";
        
        // // Add legend
        // chart.legend = new am4charts.Legend();
        this.chart = chart;
    }

    componentDidUpdate() {
        // this.chart.data = this.props.data;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render()    {
        return(
            <div id={this.props.idDiv} style={{ width: "100%", height:"100px"}}></div>
        );
    }
}
export default MiniChartLine