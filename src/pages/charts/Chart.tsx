import Breadcrumb from '../../components/Breadcrumb';
import ChartFour from '../../components/ChartFour';
import ChartOne from '../../components/ChartOne';
import ChartThree from '../../components/ChartThree';
import ChartTwo from '../../components/ChartTwo';
import DefaultLayout from '../../layout/DefaultLayout';

const Chart = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="نمودار" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </DefaultLayout>
  );
};

export default Chart;
