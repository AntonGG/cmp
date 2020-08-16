import React, { useEffect } from "react";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  AreaChart,
  Area,
  ReferenceLine,
  Legend,
} from "recharts";
import "../../sass/presale/chart.sass";
var lastDate = "";
const renderCustomAxisTick = ({ x, y, payload }) => {
  console.log("renderCustomAxisTick", { x, y, payload });
  if (lastDate === payload.value) {
    return "";
  }
  return (
    <svg>
      <svg
        x={x - 6}
        y={y - 15}
        width="13"
        height="13"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="black" />
      </svg>
      <text x={x - 35} y={y + 17} textAnchor="center" fill="#666">
        {payload.value}
      </text>
    </svg>
  );
};

const Chart = ({ ico_info }) => {
  useEffect(() => {
    lastDate = ico_info ? ico_info.dates[ico_info.dates.length - 1].date : "";
  }, [ico_info]);

  if (!ico_info) {
    return "";
  }
  return (
    <div className="chart">
      <AreaChart
        width={1140}
        height={454}
        data={ico_info.dates}
        //margin={{ top: "0", right: "30px", left: "30px", bottom: "0" }}
        //margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      >
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6ae53e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6ae53e" stopOpacity={0} />
          </linearGradient>

          <linearGradient
            gradientUnits="userSpaceOnUse"
            spreadMethod="pad"
            id="e"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="rgba(255, 255, 255, 0.01)"
              stopOpacity={0.01}
            />
            <stop offset="99%" stopColor="rgb(0, 0, 0)" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="price"
          stroke="#6ae53e"
          fillOpacity={1}
          fill="#6ae53e"
          // fill="url(#colorPrice)"
        />
        <YAxis
          dataKey="price"
          hide={true}
          tickFormatter={(label) => ``}
          domain={[
            (dataMin) => 0,
            (dataMax) => (dataMax < 1 ? 2 : dataMax + 20),
          ]}
        />
        <XAxis
          dataKey="date"
          tick={renderCustomAxisTick}
          tickLine={false}
          // domain={[1596931200, 1600560000]}
        />

        {ico_info.dates.map((v) =>
          //проверка чтобы не рисовать первую и последнюю палку
          v.date !== ico_info.dates[0].date &&
          v.date !== ico_info.dates[ico_info.dates.length - 1].date ? (
            <ReferenceLine x={v.date} stroke="url(#e)" />
          ) : (
            ""
          )
        )}

        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </AreaChart>
    </div>
  );
};

export default Chart;
