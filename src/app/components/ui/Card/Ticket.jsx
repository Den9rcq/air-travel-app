import React from "react"
import Direction from "./Direction"
import PropTypes from "prop-types"

const Ticket = ({ flightThere, flightBack }) => {
  console.log(flightThere)
  return (
    <div className="ticket">
      <Direction {...flightThere} />
      <div className="divider" />
      <Direction {...flightBack} />
    </div>
  )
}

Ticket.propTypes = {
  flightThere: PropTypes.object,
  flightBack: PropTypes.object
}

export default Ticket
