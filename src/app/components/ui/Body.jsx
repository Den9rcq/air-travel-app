import React from "react"
import Card from "./Card"

const Body = () => {
  return (
    <div>
      <ul>
        <Card/>
        <Card/>
      </ul>
      <button className="btn-more">Показать ещё</button>
    </div>
  )
}

export default Body
