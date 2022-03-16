import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAirlines, getAirlines } from "../../store/airlinesSlice"
import { getShortName } from "../../helpers/getShortName"
import { selectedAirlineChanged } from "../../store/flightsSlice"
import MyInput from "../common/MyInput"

const AirlineSorting = () => {
  const [checked, setChecked] = useState({})
  const dispatch = useDispatch()
  const airlines = useSelector(getAirlines)

  useEffect(() => {
    dispatch(fetchAirlines())
  }, [])

  useEffect(() => {
    dispatch(selectedAirlineChanged(checkedTransform(checked)))
  }, [checked])

  const changeCheckbox = ({ target }) => {
    setChecked(prevState => {
      return {
        ...prevState,
        [target.name]: !prevState[target.name]
      }
    })
  }

  const checkedTransform = (obj) => {
    let array = []
    for (const objKey in obj) {
      if (obj[objKey]) {
        array.push(objKey)
      }
    }
    return array
  }

  return (
    <fieldset>
      <legend>Авиакомпании</legend>
      <ul>
        {airlines && (airlines.map(({name, price}) => (
          <MyInput
            key={name}
            type="checkbox"
            name={name}
            label={`${getShortName(name)} от ${price}`}
            meaning={checked}
            handleChange={changeCheckbox}
          />
        )))}
      </ul>
    </fieldset>
  )
}

export default AirlineSorting
