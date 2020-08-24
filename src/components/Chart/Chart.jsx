import React, { memo, useEffect } from "react";
import {
  XAxis,
  CartesianGrid,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  Legend,
} from "recharts";
import CustomLastDot from "./CustomLastDot";
import CustomAxisTick from "./CustomAxisTick";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";
import "../../sass/chart/chart.sass";

const Chart = memo(({ ico_info }) => {
  useEffect(() => {
    const getElem = (index) =>
      document.querySelector(
        `#root > div.body > div > div.chart > div > svg > g.recharts-cartesian-grid > g.recharts-cartesian-grid-vertical > line:nth-child(${index})`
      );
    const elem1 = getElem(8);
    const elem2 = getElem(9);
    if (elem1) {
      elem1.style.display = "none";
    }
    if (elem2) {
      elem2.style.display = "none";
    }
  }, [ico_info]);

  if (!ico_info) {
    return "";
  } else {
    return (
      <div className="chart">
        <p className="chart__title">Капитализация</p>
        <AreaChart width={1140} height={454}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6ae53e" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#6ae53e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="capitalization" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6ae53e" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#6ae53e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="volume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
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

          <CartesianGrid stroke="url(#e)" />

          <Area
            type="basis"
            data={ico_info.dates3}
            dataKey="price"
            fill="#d4d4d4"
            stroke="#d4d4d4"
            key="dates3"
          />

          <Area
            type="basis"
            data={ico_info.dates2}
            dataKey="price"
            fill="#000000"
            stroke="#000000"
            fillOpacity={1}
            key="dates2"
          />

          <Area
            type="basis"
            data={ico_info.dates}
            dataKey="price"
            fill="#6ae33e"
            fillOpacity={1}
            stroke="#6ae33e"
            key="dates"
            dot={<CustomLastDot ico_info={ico_info} />}
          />

          <YAxis
            type="number"
            dataKey="price"
            hide={true}
            tickFormatter={(label) => ``}
            domain={[(dataMin) => 0, (dataMax) => dataMax + 5]}
          />

          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Legend verticalAlign="top" content={<CustomLegend />} />
          <XAxis
            type="number"
            dataKey="date"
            tickCount={10}
            domain={[1597017600, 1600715262]}
            tick={<CustomAxisTick />}
            tickLine={false}
          />
        </AreaChart>
      </div>
    );
  }
});

export default Chart;
