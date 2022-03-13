import React from "react"

const Direction = () => {
  return (
    <div className="ticket-info">
      <div className="direction">
        <div className="flight-direction">
          <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
        </div>
        <div className="arrow">{"->"}</div>
        <div className="flight-direction">
          <p>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
        </div>
      </div>
      <div className="flight-time">
        <div className="time">
          <p>18:10 <span>18 авг. вт</span></p>
        </div>
        <div className="time-in-the-air">
          <p>14 ч 45 мин</p>
        </div>
        <div className="time">
          <p><span>19 авг. ср</span> 09:25</p>
        </div>
      </div>
      <div className="transfer-divider">1 пересадка</div>
      <div className="airline">
        Рейс выполняет: LOT Polish Airlines
      </div>
    </div>
  )
}

export default Direction
