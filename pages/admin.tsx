import AdminLayouts from "@/components/AdminLayouts";
import CustomerChart from "@/components/CustomerChart";
import DashboardStat from "@/components/DashboardStat";
import SalesChart from "@/components/SalesChart";
import React from "react";

type Props = {};

function admin({}: Props) {
  return (
    <>
      <AdminLayouts title="Admin Dashboard">
        <div className="flex flex-col gap-4">
          <DashboardStat />
          <SalesChart />
          <CustomerChart />
        </div>
      </AdminLayouts>
    </>
  );
}

export default admin;
