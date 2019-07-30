import React, { Component } from 'react';
import {Bar, Line, Pie,Doughnut} from 'react-chartjs-2';
import { Form, Icon, Input, Button, Alert, Col, Row, Card, Layout } from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../ChartDoughnut/ChartDoughnutCSS.css";
am4core.useTheme(am4themes_animated);
class ChartDoughnut extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    handleLangChange = (teste) => {
        // var lang = this.dropdown.value;
        this.props.onClick(teste, this.props.cardTitle);            
    }

    componentDidMount() {
        let chart = am4core.create(this.props.idDiv, am4charts.PieChart);
        chart.data = this.state.data;
        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "departament";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(30);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        
        pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
            {
            "property": "cursor",
            "value": "pointer"
            }
        ];

        pieSeries.slices.template.events.on(
            "hit",
            ev => {
                let a = ev.target;
                this.handleLangChange(ev.target._dataItem.dataContext["departament"]);
                //alert(ev.target._dataItem.dataContext["departament"]);
                //console.log("clicked on ", ev.target._dataItem.dataContext["country"]);
            },
            this
        );


        var colorSet = new am4core.ColorSet();
        colorSet.list = this.props.colorsPie.map(function(color) {
            return new am4core.color(color);
        });
        pieSeries.colors = colorSet;

        pieSeries.alignLabels = true;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.padding(0,0,0,0);


        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        chart.legend = new am4charts.Legend();

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
    
    render()    {
        return(
            <Card title={this.props.cardTitle} bordered={false} style={{ width: '95%', maxHeight:'5%' }} className="CardPie">
                 <div id={this.props.idDiv} style={{ width: "100%", height:"400px"}}></div>
            </Card>
        );
    }
}
export default ChartDoughnut