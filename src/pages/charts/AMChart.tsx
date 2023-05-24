import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

import AMChartXY from '../../components/AMChartXY';
import AMChartPy from '../../components/AMChartPy';
import AMChartPyComplexOne from '../../components/AMChartPyComplex';
import AMChartPyComplexTwo from '../../components/AMChartPyComplexTwo';



const AMChart = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="نمودار" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <AMChartXY />
        </div>
        <div className="col-span-6">
          <AMChartPy />
        </div>
        
        <div className="col-span-6">
          <AMChartPyComplexOne />
        </div>

        <div className="col-span-6">
          <AMChartPyComplexTwo />
        </div>

      </div>
    </DefaultLayout>
  );
};

export default AMChart;
