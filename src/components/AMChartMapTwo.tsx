

import { useLayoutEffect } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import iranMap from '../images/country/map/iranHigh.svg';

import faker from 'faker';

const AMChartMapTwo = () => {
  
  useLayoutEffect(() => {
    
    let root = am5.Root.new("AMChartMapTwo");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // https://www.amcharts.com/docs/v5/charts/map-chart/#Built_in_projections
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        // projection: am5map.geoAlbersUsa()
        projection: am5map.geoEqualEarth()
        // projection: am5map.geoEquirectangular()
        // projection: am5map.geoMercator()
        // projection: am5map.geoNaturalEarth1()
        // projection: am5map.geoOrthographic()
      })
    );
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    
    let continentSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_continentsLow,
      exclude: ["antarctica"]
    }));
    
    let countrySeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"],
      visible: false
    }));
    continentSeries.mapPolygons.template.events.on("click", function (ev) {

      // Clicked on a continent
      // ev.dataItem will container clicked polygon's data item
    });

    continentSeries.mapPolygons.template.events.on("click", function (ev) {
      continentSeries.zoomToDataItem(ev.target.dataItem);
      continentSeries.hide();
      countrySeries.show();
    });

    let homeButton = chart.children.push(am5.Button.new(root, {
      paddingTop: 10,
      paddingBottom: 10,
      x: am5.percent(100),
      centerX: am5.percent(100),
      opacity: 0,
      interactiveChildren: false,
      icon: am5.Graphics.new(root, {
        svgPath: "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
        fill: am5.color(0xffffff)
      })
    }));
    
    homeButton.events.on("click", function() {
      chart.goHome();
      continentSeries.show();
      countrySeries.hide();
      homeButton.hide();
    });

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
        <div id="AMChartMapTwo" className="-ml-5" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default AMChartMapTwo;
