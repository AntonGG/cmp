import React from "react";
import "../../sass/personalArea/lastСompletedTasks.sass";

const LastCompletedTasks = () => {
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
      <table className="last-completed-tasks__table">
        <tr>
          <td>
            <div className="last-completed-tasks__circle"></div>
          </td>
          <td>
            <div>
                <p>Webtoken profit</p>
                <p>Приложение</p>
            </div>
          </td>
          <td>135 токенов</td>
        </tr>
        <tr className="last-completed-tasks__tr-td__gray">
          <td>
            {" "}
            <div className="last-completed-tasks__circle"></div>
          </td>
          <td>В обработке</td>
          <td>135 токенов</td>
        </tr>
        <tr>
          <td>
            {" "}
            <div className="last-completed-tasks__circle"></div>
          </td>
          <td>В обработке</td>
          <td>135 токенов</td>
        </tr>
      </table>
    </div>
  );
};

export default LastCompletedTasks;
