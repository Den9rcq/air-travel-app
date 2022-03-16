import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { sortChanged } from "../../store/flightsSlice"
import MyInput from "../common/MyInput"

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
        <MyInput
          type="radio"
          name="price"
          value="ascending"
          label="- по возрастанию"
          meaning={value}
          handleChange={changeValue}/>
        <MyInput
          type="radio"
          name="price"
          value="descending"
          label="- по убыванию"
          meaning={value}
          handleChange={changeValue}
        />
        <MyInput
          type="radio"
          name="price"
          value="time"
          label="- по времени в пути"
          meaning={value}
          handleChange={changeValue}
        />
      </ul>
    </fieldset>
  )
}

export default Sort
