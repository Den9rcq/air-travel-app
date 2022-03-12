import React from "react"

const Sort = () => {
  return (
    <fieldset>
      <legend>Сортировать</legend>
      <ul>
        <li>
          <label>
            <input type="radio" name="price" value="ascending"/>
            - по возрастанию
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="price" value="descending" />
            - по убыванию
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="price" value="time" />
            - по времени в пути
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default Sort
