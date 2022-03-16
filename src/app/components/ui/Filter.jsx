import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterTransferChange } from "../../store/flightsSlice"
import MyInput from "../common/MyInput"

const Filter = () => {

  const [checked, setChecked] = useState({
    oneChange: false,
    nonStop: false
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterTransferChange(checked))
  }, [checked])

  const changeCheckbox = ({ target }) => {
    setChecked(prevState => {
      return {
        ...prevState,
        [target.name]: !prevState[target.name]
      }
    })
  }

  return (
    <fieldset>
      <legend>Фильтровать</legend>
      <ul>
        <MyInput
          type="checkbox"
          name="oneChange"
          label="- 1 пересадка"
          handleChange={changeCheckbox}
          meaning={checked}
        />
        <MyInput
          type="checkbox"
          name="nonStop"
          label="- без пересадок"
          handleChange={changeCheckbox}
          meaning={checked}
        />
      </ul>
    </fieldset>
  )
}

export default Filter
