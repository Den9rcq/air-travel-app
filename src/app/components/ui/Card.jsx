import React from "react"
import HeaderCard from "./Card/HeaderCard"
import Ticket from "./Card/Ticket"
import PropTypes from "prop-types"

const Card = (props) => {
  return (
    <li className="card">
      <HeaderCard price={props.price}/>
      <div className="round-trip">
        <Ticket {...props}/>
      </div>
      <button onClick={() => console.log("asd")} className="btn">Выбрать</button>
    </li>
  )
}

Card.propTypes = {
  price: PropTypes.number
}

export default Card
