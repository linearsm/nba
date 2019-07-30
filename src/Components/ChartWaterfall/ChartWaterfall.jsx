import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';

am4core.useTheme(am4themes_animated);

class ChartWaterfall extends Component {
    constructor(props){
        super(props);
    }

    handleLangChange = (teste) => {
        // var lang = this.dropdown.value;
        this.props.onClick(teste, this.props.cardTitle);            
    }

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        // using math in the data instead of final values just to illustrate the idea of Waterfall chart
        // a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
        chart.data = this.props.data;
 
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.minGridDistance = 40;
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        
        let columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.dataFields.categoryX = "category";
        columnSeries.dataFields.valueY = "value";
        columnSeries.dataFields.openValueY = "open";
        columnSeries.fillOpacity = 0.8;
        columnSeries.sequencedInterpolation = true;
        columnSeries.interpolationDuration = 1500;
        columnSeries.columns.template.events.on(
            "hit",
            ev => {
              let a = ev.target;
              this.handleLangChange(ev.target._dataItem.dataContext["category"]);
            //   alert(ev.target._dataItem.dataContext["category"]);
            //   console.log("clicked on ", ev.target._dataItem.dataContext["country"]);
            },
            this
        );

        //Seta as cores que eu passei nos dados
        let columnTemplate = columnSeries.columns.template;
        columnTemplate.strokeOpacity = 0;
        columnTemplate.propertyFields.fill = "color";

        //seta as labels no meio da coluna
        let label = columnTemplate.createChild(am4core.Label);
        label.text = "{displayValue.formatNumber('$#,## a')}";
        label.align = "center";
        label.valign = "middle";
        
        //seta a linha tracejada no grafico
        let stepSeries = chart.series.push(new am4charts.StepLineSeries());
        stepSeries.dataFields.categoryX = "category";
        stepSeries.dataFields.valueY = "stepValue";
        stepSeries.noRisers = true;
        stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        stepSeries.strokeDasharray = "3,3";
        stepSeries.interpolationDuration = 2000;
        stepSeries.sequencedInterpolation = true;
        
        // because column width is 80%, we modify start/end locations so that step would start with column and end with next column
        stepSeries.startLocation = 0.1;
        stepSeries.endLocation = 1.1;
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "none";
    
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
                <div id="chartdiv" style={{ width: "100%",height: "350px" }}></div>
            </Card>
        
        );
    }
}
export default ChartWaterfall;