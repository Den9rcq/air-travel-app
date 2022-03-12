import React from "react"

const Direction = () => {
  return (
    <>
      <div className="direction">
        <div className="direction-from">
          <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
        </div>
        {"->"}
        <div className="direction-here">
          <p>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
        </div>
      </div>
      <div className="flight-time">
        <div className="departure-time">
          <p>18:10 <span>18 авг. вт</span></p>
        </div>
        <div className="time-in-the-air">
          <p>14 ч 45 мин</p>
        </div>
        <div className="arrival-time">
          <p><span>19 авг. ср</span> 09:25</p>
        </div>
      </div>
      <div>
        Рейс выполняет: LOT Polish Airlines
      </div>
    </>
  )
}

export default Direction
