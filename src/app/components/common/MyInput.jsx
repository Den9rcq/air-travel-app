import React from "react"
import PropTypes from "prop-types"

const MyInput = ({ type, name, value, label, meaning, min, max, placeholder, handleChange }) => {
  return (
    <li>
      <label>
        {type === "number" && label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          checked={
            type === "radio" ? meaning === value : type === "checkbox" ? meaning[name] : null
          }
          min={min}
          max={max}
          placeholder={placeholder}
        />
        {type !== "number" && label}
      </label>
    </li>
  )
}

MyInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string,
  meaning: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object
  ]),
  min: PropTypes.number || PropTypes.string,
  max: PropTypes.number || PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleChange: PropTypes.func
}

export default MyInput
