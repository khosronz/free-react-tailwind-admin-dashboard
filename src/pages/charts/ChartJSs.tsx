
import DefaultLayout from '../../layout/DefaultLayout.js';
import Breadcrumb from "../../components/Breadcrumb.js";
import ChartJSOne from '../../components/ChartJSOne.js';
import ChartJSTwo from '../../components/ChartJSTwo.js';
import ChartJSThree from '../../components/ChartJSThree.js';
import ChartJSFour from '../../components/ChartJSFour.js';
import ChartJSFive from '../../components/ChartJSFive.js';
import ChartJSSix from '../../components/ChartJSSix.js';
import ChartJSSeven from '../../components/ChartJSSeven.js';
import ChartJSEight from '../../components/ChartJSEight.js';
import ChartJSNine from '../../components/ChartJSNine.js';
import ChartJSTen from '../../components/ChartJSTen.js';
import ChartJSEleven from '../../components/ChartJSEleven.js';
import ChartJSTwelve from '../../components/ChartJSTwelve.js';
import ChartJSThirteen from '../../components/ChartJSThirteen.js';
import ChartJSFourteen from '../../components/ChartJSFourteen.js';
import ChartJSFifteen from '../../components/ChartJSFifteen.js';
import ChartJSSixteen from '../../components/ChartJSSixteen.js';
import ChartJSSeventeen from '../../components/ChartJSSeventeen.js';
import ChartJSNineteen from '../../components/ChartJSNineteen.js';

const ChartJSs = () => {


  return (
    <DefaultLayout>
      <Breadcrumb pageName="نمودار ۲" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">

          <ChartJSOne />

        </div>

        <div className="col-span-6">

          <ChartJSNine />

        </div>
        <div className="col-span-6">

          <ChartJSTen />

        </div>
        <div className="col-span-6">

          <ChartJSTwo />

        </div>
        <div className="col-span-6">
          <ChartJSThree />

        </div>
        <div className="col-span-6">

          <ChartJSFour />

        </div>
        <div className="col-span-6">

          <ChartJSFive />

        </div>
        <div className="col-span-6">

          <ChartJSSix />

        </div>
        <div className="col-span-6">

          <ChartJSSeven />

        </div>
        <div className="col-span-6">

          <ChartJSEight />

        </div>
        <div className="col-span-6">

          <ChartJSEleven />

        </div>
        <div className="col-span-6">

          <ChartJSTwelve />

        </div>
        <div className="col-span-6">

          <ChartJSThirteen />

        </div>

        <div className="col-span-6">

          <ChartJSFourteen />

        </div>

        <div className="col-span-6">

          <ChartJSFifteen />

        </div>

        <div className="col-span-6">

          <ChartJSSixteen />

        </div>

        <div className="col-span-6">

          <ChartJSSeventeen />

        </div>

        <div className="col-span-6">

          <ChartJSNineteen />

        </div>
      </div>

    </DefaultLayout>
  );
};

export default ChartJSs;
