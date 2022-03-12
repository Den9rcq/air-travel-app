import React from "react"
import HeaderCard from "./Card/HeaderCard"
import Ticket from "./Card/Ticket"

const Card = () => {
  return (
    <li>
      <HeaderCard />
      <div className="round-trip">
        <Ticket/>
      </div>
      <button>Выбрать</button>
    </li>
  )
}

export default Card
