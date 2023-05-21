import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';

import faker from 'faker';

const labels = ['آدرس IP', 'زمان مراجعه', 'وضعیت', 'مرورگر'];

export const data = {
  labels,
  datasets: [
    {
      ipaddress: labels.map(() => faker.internet.userName()),
      datetime: labels.map(() => faker.internet.userName()),
      status: labels.map(() => faker.internet.userName()),
      browser: labels.map(() => faker.internet.userName()),
    },
    {
      ipaddress: labels.map(() => faker.internet.userName()),
      datetime: labels.map(() => faker.internet.userName()),
      status: labels.map(() => faker.internet.userName()),
      browser: labels.map(() => faker.internet.userName()),
    },
    {
      ipaddress: labels.map(() => faker.internet.userName()),
      datetime: labels.map(() => faker.internet.userName()),
      status: labels.map(() => faker.internet.userName()),
      browser: labels.map(() => faker.internet.userName()),
    },
    {
      ipaddress: labels.map(() => faker.internet.userName()),
      datetime: labels.map(() => faker.internet.userName()),
      status: labels.map(() => faker.internet.userName()),
      browser: labels.map(() => faker.internet.userName()),
    },
    {
      ipaddress: labels.map(() => faker.internet.userName()),
      datetime: labels.map(() => faker.internet.userName()),
      status: labels.map(() => faker.internet.userName()),
      browser: labels.map(() => faker.internet.userName()),
    },
  ],
};

const TableIPList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
      کانال های برتر
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          {data.labels.map((label, index) => {
            return (
              
              <div className="p-2.5 xl:p-5"  key={index}>
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                {label}
                </h5>
              </div>
            );
          })}
          
        </div>

        {data.datasets.map((row, index) => {
            return (
              <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4" key={index}>
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="flex-shrink-0">
                    <img src={BrandOne} alt="Brand" />
                  </div>
                  <p className="hidden text-black dark:text-white sm:block">گوگل</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">10</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">قرمز</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">فایرفاکس</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TableIPList;
