import React, { memo } from "react";

const CustomTooltip = memo(({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        {payload.map((v) => {
          switch (v.fill) {
            case "#d4d4d4":
              return <p className="custom-tooltip__capitalization">{`Капитализация : ${v.value} USD`}</p>;
            case "#6ae33e":
              return <p className="custom-tooltip__price">{`Цена : ${v.value} %`}</p>;
            case "#000000":
              return <p className="custom-tooltip__volume">{`Объем : ${v.value} USD`}</p>;
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
