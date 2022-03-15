import React from "react"
import PropTypes from "prop-types"
import { getTime } from "../../../helpers/getTime"
import { getTotalTravelTime } from "../../../helpers/getTotalTravelTime"

const Direction = ({
  departureDate,
  arrivalDate,
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
  carrier,
  transfers
}) => {
  const departure = getTime(departureDate)
  const arrival = getTime(arrivalDate)
  const {hours, minutes} =  getTotalTravelTime(departureDate, arrivalDate)

  return (
    <div className="ticket-info">
      <div className="direction">
        <div className="flight-direction">
          <p>{departureCity?.caption}, {departureAirport?.caption}
            <span>({departureAirport?.uid})</span></p>
        </div>
        <div className="arrow">{"->"}</div>
        <div className="flight-direction">
          <p>{arrivalCity?.caption}, {arrivalAirport?.caption}
            <span>({arrivalAirport?.uid})</span></p>
        </div>
      </div>
      <div className="flight-time">
        <div className="time">
          <p>{departure.hoursAndMin} <span>{departure.day}</span></p>
        </div>
        <div className="time-in-the-air">
          <p>{hours} ч {minutes} мин</p>
        </div>
        <div className="time">
          <p><span>{arrival.day}</span> {arrival.hoursAndMin}</p>
        </div>
      </div>
      {transfers === 1 ? <div className="transfer-divider">{transfers} пересадка</div> : <div className="transfer-divider-null"/>}
      <div className="airline">
        Рейс выполняет: {carrier}
      </div>
    </div>
  )
}

Direction.propTypes = {
  departureDate: PropTypes.string,
  arrivalDate: PropTypes.string,
  departureCity: PropTypes.object,
  departureAirport: PropTypes.object,
  arrivalCity: PropTypes.object,
  arrivalAirport: PropTypes.object,
  carrier: PropTypes.string,
  transfers: PropTypes.number
}

export default Direction
