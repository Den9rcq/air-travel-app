import React from "react"
import PropTypes from "prop-types"

const HeaderCard = ({ price }) => {
  return (
    <div className="header-card">
      <a href="#"
        className="header-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
          alt="logo" />
      </a>

      <div className="header-price">
        <span>{price} ₽</span>
        <p>Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  )
}

HeaderCard.propTypes = {
  price: PropTypes.number
}

export default HeaderCard
