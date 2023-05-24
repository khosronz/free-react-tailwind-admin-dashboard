

import { useLayoutEffect } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import faker from 'faker';

const AMChartXY = () => {
  useLayoutEffect(() => {
    
    let root = am5.Root.new("AMChartXYOne");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push( 
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      }) 
    );

    // Define data
    let data = [{
      category: "Research",
      value1: faker.datatype.number({ min: 1, max: 1000 }),
      value2: faker.datatype.number({ min: 1, max: 1000 })
    }, {
      category: "Marketing",
      value1: faker.datatype.number({ min: 1, max: 1000 }),
      value2: faker.datatype.number({ min: 1, max: 1000 })
    }, {
      category: "Sales",
      value1: faker.datatype.number({ min: 1, max: 1000 }),
      value2: faker.datatype.number({ min: 1, max: 1000 })
    }];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category"
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category"
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);
  return (
    <div dir='ltr' className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <h4>نمودار طول و عرض</h4>
          </div>

        </div>
      </div>

      <div>
        <div id="AMChartXYOne" className="-ml-5" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default AMChartXY;
