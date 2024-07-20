"use client";

import { Chart } from "./_components/chart";
import { BusinessStatistics } from "./_components/statistics";
import {
  CircleDollarSign,
  Banknote,
  Eye,
  ShoppingCart,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getData } from "./_actions/getData";
import { formatMoney } from "./_actions/formatMoney";
import { formatChartLabel } from "./_actions/formatChartLabel";

type Sale = {
  date: string;
  value: number;
};

type Order = {
  name: string;
  orderAmount: number;
};
type AnalyticsData = {
  grossSales: number;
  netSales: number;
  availableProducts: number;
  websiteVisits: number;
  growthRate: number;
  salesData: Sale[];
  pendingOrders: Order[];
};

export default function OverviewPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [chartData, setChartData] = useState<Sale[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);

        const newData = data.salesData.map((data: Sale) => {
          const newLabel = formatChartLabel(data.date);
          data.date = newLabel;
          return data;
        });

        setChartData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <h1 className="w-full text-3xl border-b p-4">Overview</h1>
      <div className="w-full flex flex-wrap justify-between p-4">
        <div className="border w-1/6 text-left p-4 rounded">
          <h1 className="text-xl flex items-center gap-2">
            <Banknote />
            <span>Gross Sales</span>
          </h1>
          <span className="text-green-500 text-m">
            {formatMoney(data.grossSales)}
          </span>
        </div>
        <div className="border w-1/6 text-left p-4 rounded">
          <h1 className="text-xl flex items-center gap-2">
            <CircleDollarSign />
            <span>Net Sales</span>
          </h1>
          <span className="text-green-500 text-m">
            {formatMoney(data.netSales)}
          </span>
        </div>
        <div className="border w-1/6 text-left p-4 rounded">
          <h1 className="text-xl flex items-center gap-2">
            <ShoppingCart />
            <span>Available Products</span>
          </h1>
          <span className="text-blue-500 text-m">
            {data.availableProducts} Products in Inventory
          </span>
        </div>
        <div className="border w-1/6 text-left p-4 rounded">
          <h1 className="text-xl flex items-center gap-2">
            <Eye />
            <span>Website Visits</span>
          </h1>
          <span className="text-blue-500 text-m">
            {data.websiteVisits} Visits
          </span>
        </div>
        <div className="border w-1/6 text-left p-4 rounded">
          <h1 className="text-xl flex items-center gap-2">
            <Calendar />
            <span>Pending Orders</span>
          </h1>
          <span className="text-orange-500 text-m">
            {data.pendingOrders.length} Pendings
          </span>
        </div>
      </div>
      <div className="w-full flex gap-4 p-4">
        <Chart chartData={chartData} />
        <BusinessStatistics />
      </div>
    </div>
  );
}
