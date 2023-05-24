

import { useLayoutEffect } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import faker from 'faker';

const AMChartPyComplexTwo = () => {
  useLayoutEffect(() => {
    
    let root = am5.Root.new("AMChartPyComplexTwo");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        radius: am5.percent(95),
        innerRadius: am5.percent(50)
      })
    );
    

    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Define data
    let data = [{
      country: "France",
      sales: faker.datatype.number({ min: 10000, max: 200000 })
    }, {
      country: "Spain",
      sales: faker.datatype.number({ min: 10000, max: 200000 })
    }, {
      country: "United Kingdom",
      sales: faker.datatype.number({ min: 10000, max: 200000 })
    }];

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
        startAngle: -360,
        endAngle: 0
      })
    );
    
    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      layout: root.horizontalLayout
    }));
    legend.data.setAll(series.dataItems);
    
    return () => {
      root.dispose();
    };
  }, []);
  return (
    <div dir='ltr' className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <h4>نمودار پای پیچیده</h4>
          </div>

        </div>
      </div>

      <div>
        <div id="AMChartPyComplexTwo" className="-ml-5" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default AMChartPyComplexTwo;
