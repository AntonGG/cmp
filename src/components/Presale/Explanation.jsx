import React from "react";
import "../../sass/presale/explanation.sass";

const Explanation = () => {
  return (
    <div className="explanation">
      <p className="explanation__title">Пояснение</p>
      <div className="explanation-note">
        <p>
          Предпродажа монет будет проводится в два этапа: Private Pre-sale и
          ICO.
        </p>
        <p>
          Цена первой монеты будет составлять 0,15 USDT, а каждая последующая
          монета будет стоить на одну миллионную (0.000001) больше, чем
          предыдущая:
        </p>
        <p className="font-bold">Pn= 0.15 x (1+10-6)USDT</p>
        <p>
          В результате дополнительный запас, поступающий из CMP Reserve, всегда
          будет дороже, чем цена, заплаченная любым из покупателей. Эта схема
          должна позволить рынку определить справедливую цену (fair price) и
          объем для продажи монет.
        </p>
      </div>
      <div className="explanation-note">
        <p className="explanation-note__item-number">1</p>
        <p>25.08.2020 - 07.09.2020 включительно</p>
        <p>
          Private Pre-sale - первоначальный этап продажи CMP coin. В продажу
          поступят 1 000 000 CMP coin. Этап будет ограничен по времени. На
          данном этапе планируется привлечь ограниченное количество инвесторов.
          Цель - дать лимитированную возможность приобрести CMP coin до
          официального запуска ICO. На приобретенные CMP coin будет начисляться
          майнинг -- от 7.77% до 9.73% в месяц, в зависимости от количества
          монет на балансе кошелька. ДОБАВИТЬ ГРАДАЦИЮ ПО БАЛАНСАМ
        </p>
      </div>
      <div className="explanation-note">
        <p className="explanation-note__item-number">2</p>
        <p>20.09.2020 - 20.12.2020 включительно</p>
        <p>
          ICO - второй этап продажи CMP coin. Для покупки будет доступно 10 000
          000 CMP coin. Как и Pre-Sale, этап ICO также имеет временные рамки,
          однако будет доступен неограниченному кругу лиц (приобрести монету
          сможет любой зарегистрировавшийся на платформе). На приобретенные CMP
          coin будет начисляться майнинг - от 7.77% до 9.73% в месяц, также в
          зависимости от количества монет на балансе кошелька.
        </p>
      </div>

      <div className="explanation-note">
        <p className="explanation-note__registration-title">
          Процесс регистрации на Private Pre-sale:
        </p>
        <p className="explanation-note__registration-text">
          Заполнение формы (Участник Pre-Sale)
        </p>
        <p className="explanation-note__registration-text">
          Одобрение формы (Администрация CMP)
        </p>
        <p className="explanation-note__registration-text">
          Открытие возможности приобретения на сайте cm.place CMP coin
          (Администрация CMP)
        </p>
        <p className="explanation-note__registration-text">
          Пополнение баланса аккаунта (Участник Pre-Sale)
        </p>
        <p className="explanation-note__registration-text">
          Обмен на CMP coin (Участник Pre-Sale)
        </p>
        <p className="explanation-note__registration-text">
          Идет начисление майнинга (Администрация CMP)
        </p>
      </div>
    </div>
  );
};

export default Explanation;
