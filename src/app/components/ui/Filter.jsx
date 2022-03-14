import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterTransferChange } from "../../store/flightsSlice"

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
        <li>
          <label>
            <input
              type="checkbox"
              name="oneChange"
              onChange={(e) => changeCheckbox(e)}
              checked={checked.oneChange}
            />
            - 1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="nonStop"
              onChange={(e) => changeCheckbox(e)}
              checked={checked.nonStop}
            />
            - без пересадок
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default Filter
