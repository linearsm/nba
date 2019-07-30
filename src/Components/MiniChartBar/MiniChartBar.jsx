import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import '../ChartBar/ChartBarCSS.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class MiniChartBar extends Component {
    constructor(props){
        super(props);
      
    }
    componentDidMount() {
        let chart = am4core.create(this.props.idDiv, am4charts.XYChart);
        chart.data = this.props.data;
        // chart.width = am4core.percent(100);
        // chart.height = am4core.percent(100);

        // Create axes
		let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "contract";
		categoryAxis.renderer.inversed = true;
		categoryAxis.renderer.minGridDistance = 1;
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.cellStartLocation = 0.1;
		categoryAxis.renderer.cellEndLocation = 0.9;
		
		let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
		valueAxis.renderer.opposite = true;
		valueAxis.renderer.grid.template.disabled = true;
		valueAxis.min = 0;
		valueAxis.max = 4000;
        

        chart.colors.list = [
            am4core.color("#006BB8"),
            am4core.color("#17408B"),
        ];

        // Create series
        function createSeries(field, name) {
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "contract";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
            series.columns.template.height = am4core.percent(50);
            series.sequencedInterpolation = true;
            series.columns.template.fill = am4core.color("#0099ff");
           
            let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
            categoryLabel.label.text = "{name}";
            categoryLabel.label.horizontalCenter = "right";
            categoryLabel.label.fontSize = 9;
            categoryLabel.label.dx = -10;
            categoryLabel.label.fill = am4core.color("#fff");
            categoryLabel.label.hideOversized = false;
            categoryLabel.label.truncate = false;    
        }
        
        createSeries("value", "");
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render()    {
        return(
            <div id={this.props.idDiv} style={{ width: "90%", height:"100px"}}></div>
        );
    }
}
export default MiniChartBar