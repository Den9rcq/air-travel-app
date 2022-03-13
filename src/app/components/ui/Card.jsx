import React from "react"
import HeaderCard from "./Card/HeaderCard"
import Ticket from "./Card/Ticket"

const Card = () => {
  return (
    <li className="card">
      <HeaderCard />
      <div className="round-trip">
        <Ticket/>
      </div>
      <button className="btn">Выбрать</button>
    </li>
  )
}

export default Card
