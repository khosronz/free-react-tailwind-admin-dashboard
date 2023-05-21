import TableIPList from "./TableIPList";

const SecurityReport = () => {
  
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
      گزارش های امنیتی
      </h4>
      <div id="securityReport">
        <TableIPList />
      </div>
      
    </div>
  );
  
};

export default SecurityReport;
