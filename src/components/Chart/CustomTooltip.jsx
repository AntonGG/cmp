import React, { memo } from "react";

const CustomTooltip = memo(({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        {payload.map((v) => {
          switch (v.fill) {
            case "#d4d4d4":
              return <p className="label">{`Капитализация : ${v.value}`}</p>;
            case "#6ae33e":
              return <p className="label">{`Цена : ${v.value}`}</p>;
            case "#000000":
              return <p className="label">{`Объем : ${v.value}`}</p>;
            default:
              return "";
          }
        })}
      </div>
    );
  }
  return null;
});

export default CustomTooltip;
