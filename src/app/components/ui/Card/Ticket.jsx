import React from "react"
import Direction from "./Direction"

const Ticket = () => {
  return (
    <div className="ticket">
      <Direction/>
      <div className="divider"/>
      <Direction/>
    </div>
  )
}

export default Ticket
