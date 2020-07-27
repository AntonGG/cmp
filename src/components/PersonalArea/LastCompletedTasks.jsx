import React from "react";
import "../../sass/personalArea/lastСompletedTasks.sass";
import timeLogo from "../../images/PersonalArea/time.png";
const LastCompletedTasks = ({ lastCompletedTasks }) => {
  return (
    <div className="last-completed-tasks">
      <div className="last-completed-tasks__menu">
        <p className="last-completed-tasks__title">
          Последние выполненные задания
        </p>
        <button className="last-completed-tasks__download-button">
          Скачать отчет
        </button>
      </div>
      <div>
        {lastCompletedTasks.map((v, i) => (
          <div
            className={
              i % 2 === 0
                ? "last-completed-tasks__table-row"
                : "last-completed-tasks__table-row__active"
            }
          >
            <img
              className="last-completed-tasks__logo"
              src={timeLogo}
              alt="Logo"
            />
            <div className="last-completed-tasks__row-title">
              <p className="last-completed-tasks__name">{v.name}</p>
              <p>{v.type}</p>
            </div>
            <div className="last-completed-tasks__row-time">{v.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastCompletedTasks;

// <table className="last-completed-tasks__table">
//         <tr>
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>
//             <div>
//               <p>Webtoken profit</p>
//               <p>Приложение</p>
//             </div>
//           </td>
//           <td>135 токенов</td>
//         </tr>
//         <tr className="last-completed-tasks__tr-td__gray">
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>В обработке</td>
//           <td>135 токенов</td>
//         </tr>
//         <tr>
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>В обработке</td>
//           <td>135 токенов</td>
//         </tr>
//       </table>
