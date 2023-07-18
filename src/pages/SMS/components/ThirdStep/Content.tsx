import React from "react";
import Info from "./Info";
import PeriodTable from "./PeriodTable";
import TaxesTable from "./TaxesTable";
import TotalCountTable from "./TotalCountTable";
import Footer from "./Footer";

const Content = () => {
  return (
    <>
      <Info />
      <PeriodTable />
      <TaxesTable />
      <TotalCountTable />
    </>
  );
};

export default Content;
