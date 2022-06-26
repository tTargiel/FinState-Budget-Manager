import "./chart.scss";

import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { YAxis } from 'recharts';

const data = [
  {
    name: "January",
    sales: 4000,
    revenue: 2400,
  },
  {
    name: "February",
    sales: 3000,
    revenue: 1398,
  },
  {
    name: "March",
    sales: 2000,
    revenue: 9800,
  },
  {
    name: "April",
    sales: 2780,
    revenue: 3908,
  },
  {
    name: "May",
    sales: 1890,
    revenue: 4800,
  },
  {
    name: "June",
    sales: 2390,
    revenue: 3800,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months</div>
      <ResponsiveContainer className="responsive" width="100%" aspect={ 1.5 / 1 }>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorsales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="rgb(128, 128, 128)" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorsales)" />
          <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorrevenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
