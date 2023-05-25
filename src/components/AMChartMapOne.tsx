

import { useLayoutEffect } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import iranMap from '../images/country/map/iranHigh.svg';

import faker from 'faker';

const AMChartMapOne = () => {
  
  useLayoutEffect(() => {
    
    let root = am5.Root.new("AMChartMapOne");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // https://www.amcharts.com/docs/v5/charts/map-chart/#Built_in_projections
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        // projection: am5map.geoAlbersUsa()
        // projection: am5map.geoEqualEarth()
        // projection: am5map.geoEquirectangular()
        // projection: am5map.geoMercator()
        // projection: am5map.geoNaturalEarth1()
        projection: am5map.geoOrthographic()
      })
    );
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    // Create polygon seriesf
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.data.setAll([{
      "geometry": {
        "type": "Point",
        "coordinates": [-73.778137, 40.641312],
        "name":"route 1"
      },
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-0.454296, 51.470020],
        "name":"route 2"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [116.597504, 40.072498],
        "name":"route 3"
      }
    }]);

    pointSeries.bullets.push(function() {
      let circle = am5.Circle.new(root, {
        radius: 5,
        fill: am5.color(0xff0000),
        tooltipText: "{name}"
      });
    
      circle.states.create("hover", {
        fill: am5.color(0x00ff00)
      });

      circle.events.on("click", function(ev) {
        console.log(ev.target.dataItem);
      });
    
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });
    
    
    let nyc = pointSeries.pushDataItem({ latitude: 40.641312, longitude: -73.778137 });
    let london = pointSeries.pushDataItem({ latitude: 51.470020, longitude: -0.454296 });
    let beijing = pointSeries.pushDataItem({ latitude: 40.072498, longitude: 116.597504 });

    // Create line series
    let lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {})
    );

    lineSeries.pushDataItem({
      pointsToConnect: [nyc, london, beijing]
    });

    // let graticuleSeries = chart.series.unshift(
    //   am5map.GraticuleSeries.new(root, {
    //     step: 20
    //   })
    // );
    
    return () => {
      root.dispose();
    };
  }, []);
  return (
    <div dir='ltr' className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <h4>نمودار نقشه تودر تو</h4>
          </div>

        </div>
      </div>

      <div>
        <div id="AMChartMapOne" className="-ml-5" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default AMChartMapOne;
