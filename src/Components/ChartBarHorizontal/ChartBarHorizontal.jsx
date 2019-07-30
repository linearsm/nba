import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import '../ChartBar/ChartBarCSS.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class ChartBarHorizontal extends Component {
    constructor(props){
        super(props);
      
    }
    handleLangChange = (teste) => {
        this.props.onClick(teste, this.props.cardTitle);   
    }
    componentDidMount() {
        let chart = am4core.create(this.props.idDiv, am4charts.XYChart);
        chart.data = this.props.data;

        var colorSet = new am4core.ColorSet();
        colorSet.list = this.props.colorBar.map(function(color) {
            return new am4core.color(color);
        });
        chart.colors = colorSet;

        // chart.colors.list = [
        //     am4core.color(this.props.colorBar),            
        // ];

        // Create axes
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "contract";
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;

        let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
        valueAxis.renderer.opposite = true;

        // Create series
        function createSeries(field, name, context) {
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "contract";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
            series.columns.template.height = am4core.percent(100);
            series.sequencedInterpolation = true;
            series.columns.template.events.on(
                "hit",
                ev => {
                    let a = ev.target;
                    context.handleLangChange(ev.target._dataItem.dataContext["contract"]);
                },
            );
            let valueLabel = series.bullets.push(new am4charts.LabelBullet());
            // valueLabel.label.text = "{valueX}";
            valueLabel.label.horizontalCenter = "left";
            valueLabel.label.dx = 10;
            valueLabel.label.hideOversized = false;
            valueLabel.label.truncate = false;

            let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
            categoryLabel.label.text = "{name}";
            categoryLabel.label.horizontalCenter = "right";
            categoryLabel.label.dx = -10;
            categoryLabel.label.fill = am4core.color("#fff");
            categoryLabel.label.hideOversized = false;
            categoryLabel.label.truncate = false;
        }

        createSeries("value", "", this);
        this.chart = chart;
    }

    handleLangChange = (teste) => {
        this.props.onClick(teste, "");            
    }

    componentDidUpdate() {
        this.chart.data = this.props.data;
        var colorSet = new am4core.ColorSet();
        colorSet.list = this.props.colorBar.map(function(color) {
            return new am4core.color(color);
        });
        this.chart.colors = colorSet;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render()    {
        return(

            <Card title={this.props.cardTitle} bordered={false} style={{ width: '100%', height:'100%' }} className="Card">
                <div id={this.props.idDiv} style={{ width: "100%", height:"400px"}}></div>
            </Card>

        );
    }
}
export default ChartBarHorizontal