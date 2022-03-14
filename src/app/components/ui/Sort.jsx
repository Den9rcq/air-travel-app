import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { sortChanged } from "../../store/flightsSlice"

const Sort = () => {
  const [value, setValue] = useState("ascending")
  const dispatch = useDispatch()

  const changeValue = ({ target }) => {
    setValue(target.value)
    dispatch(sortChanged(target.value))
  }

  return (
    <fieldset>
      <legend>Сортировать</legend>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="ascending"
              onChange={(e) => changeValue(e)}
              checked={value === "ascending"}
            />
            - по возрастанию
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="descending"
              onChange={(e) => changeValue(e)}
              checked={value === "descending"}
            />
            - по убыванию
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="time"
              onChange={(e) => changeValue(e)}
              checked={value === "time"}
            />
            - по времени в пути
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default Sort
