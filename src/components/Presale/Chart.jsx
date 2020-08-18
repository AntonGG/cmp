import moment from "moment";
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

let _lastDate = null;
let _icoInfo = null;

const customDot = ({ cx, cy, stroke, payload, value }) => {
  if (
    _icoInfo === null ||
    (_icoInfo && _icoInfo.dates4[_icoInfo.dates4.length - 2] !== payload.date)
  ) {
    return "";
  }
  console.log("CustomizedLabel", { cx, cy, stroke, payload, value, _lastDate });
  return (
    <>
      <svg
        x={cx - 114}
        y={cy - 170}
        width="229"
        height="198"
        viewBox="0 0 229 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41 51C29.402 51 20 60.402 20 72V119.167C20 130.765 29.402 140.167 41 140.167H99.4909L114 158L128.509 140.167H188C199.598 140.167 209 130.765 209 119.167V72C209 60.402 199.598 51 188 51H41Z"
            fill="#3B3B3B"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            d="M36 17.5C36 7.83502 43.835 0 53.5 0H175.5C185.165 0 193 7.83502 193 17.5V17.5C193 27.165 185.165 35 175.5 35H53.5C43.835 35 36 27.165 36 17.5V17.5Z"
            fill="#3B3B3B"
          />
        </g>
        <text
          width="30px"
          className="custom-dot-text"
          x={115}
          y={17}
          dy={-4}
          fill="white"
          textAnchor="middle"
          wordSpacing={2}
        >
          Продано CMP
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={34}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          {_icoInfo ? _icoInfo.selled_coins : "0"}
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={75}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          Сбор в USDT
        </text>
        <text
          className="custom-dot-text-sbor"
          x={115}
          y={110}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          170.91 USD
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={135}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          Commit Phase
        </text>

        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="51"
            width="229"
            height="147"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="16"
            y="0"
            width="197"
            height="75"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

const renderCustomAxisTick = ({ x, y, payload }) => {
  console.log("renderCustomAxisTick", { x, y, date: _icoInfo, payload });
  if (_lastDate.date === payload.value) {
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
        {moment(Number(payload.value) * 1000).format("MMM Do")}
      </text>
    </svg>
  );
};

const Chart = ({ ico_info }) => {
  useEffect(() => {
    _icoInfo = ico_info;
    _lastDate = ico_info ? ico_info.dates4[ico_info.dates4.length - 1] : "";
    console.log(
      "Chart",
      ico_info ? ico_info.dates4[ico_info.dates4.length - 1] : ""
    );
  }, [ico_info]);

  if (!ico_info) {
    return "";
  }
  return (
    <div className="chart">
      <AreaChart
        width={1140}
        height={454}
        // data={ico_info.dates4}
        //margin={{ top: "0", right: "30px", left: "30px", bottom: "0" }}
        //margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      >
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

        {/* <Area
          type="basis"
          data={ico_info.dates2}
          dataKey="price"
          fill="url(#volume)"
          key="dates2"
        /> */}

        <Area
          type="basis"
          data={ico_info.dates}
          dataKey="price"
          fill="url(#colorPrice)"
          key="dates"
          dot={<customDot/>}
        />

        {/* <Area
          type="basis"
          data={ico_info.dates3}
          dataKey="price"
          fill="url(#capitalization)"
          key="dates3"
        /> */}
        {/* {ico_info.dates4.map((v, i) =>
          //проверка чтобы не рисовать первую и последнюю палку
          v.date !== ico_info.dates4[0].date &&
          v.date !== ico_info.dates4[ico_info.dates4.length - 1].date ? (
            <ReferenceLine key={i} x={v.date} stroke="url(#e)" />
          ) : (
            ""
          )
        )} */}
        <YAxis
          type="number"
          allowDataOverflow
          dataKey="price"
          hide={true}
          tickFormatter={(label) => ``}
          domain={[(dataMin) => 0, (dataMax) => dataMax + 5]}
        />
        <XAxis
          type="number"
          allowDataOverflow
          dataKey="date"
          domain={[
            (dataMin) => ico_info.dates[0].date,
            (dataMax) => ico_info.dates[ico_info.dates.length - 1].date + 86400,
          ]}
          tick={renderCustomAxisTick}
          tickLine={false}
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
