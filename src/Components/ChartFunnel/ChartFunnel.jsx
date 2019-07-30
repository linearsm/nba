/* Imports */
import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';

am4core.useTheme(am4themes_animated);


class ChartFunnel extends Component {
    constructor(props){
        super(props);
    }

    handleLangChange = (teste) => {
        // var lang = this.dropdown.value;
        this.props.onClick(teste, this.props.cardTitle);            
    }

    componentDidMount() {
        let chart = am4core.create("chartDivFunnel", am4charts.SlicedChart);
        chart.data = this.props.data;

        let series = chart.series.push(new am4charts.FunnelSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";

        series.colors.list = [
            am4core.color("#702F8A"),
            am4core.color("#00471B"),
            am4core.color("#1D428A"),
            am4core.color("#FFB81C"),
        ];
        series.slices.template.events.on(
            "hit",
            ev => {
              let a = ev.target;
              this.handleLangChange(ev.target._dataItem.dataContext["name"]);
            },
        );
        series.alignLabels = true;

        series.labels.template.text = "{category}: [bold]{value}[/]";
        this.chart = chart;
        
    }

    componentDidUpdate() {
        this.chart.data = this.props.data;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <Card title={this.props.cardTitle} bordered={false} style={{ width: '95%', maxHeight:'5%' }} className="CardPie">
                <div id="chartDivFunnel" style={{ width: "100%",height: "350px" }}></div>
            </Card>
        
        );
    }

}

export default ChartFunnel;







