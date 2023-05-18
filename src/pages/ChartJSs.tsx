
import DefaultLayout from '../layout/DefaultLayout.js';
import Breadcrumb from "../components/Breadcrumb.js";
import ChartJSOne from '../components/ChartJSOne.js';
import ChartJSTwo from '../components/ChartJSTwo.js';
import ChartJSThree from '../components/ChartJSThree.js';
import ChartJSFour from '../components/ChartJSFour.js';

const ChartJSs = () => {


  return (
    <DefaultLayout>
      <Breadcrumb pageName="نمودار ۲" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">

          <ChartJSOne />

        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">

          <ChartJSTwo />

        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">

          <ChartJSThree />

        </div>
      </div>



      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">

          <ChartJSFour />

        </div>
      </div>

    </DefaultLayout>
  );
};

export default ChartJSs;
