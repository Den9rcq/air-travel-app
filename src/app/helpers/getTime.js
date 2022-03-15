import { getDayName, getMonthName } from "./getMonthName"
import { zero } from "./getZero"

export const getTime = (date) => {
  const time = new Date(Date.parse(date))
  const minutes = zero(time.getMinutes())
  const hours = zero(time.getHours())
  const day = zero(time.getDate())
  const month = time.getMonth()
  const dayOfWeek = time.getDay()

  return {
    hoursAndMin: `${hours}:${minutes}`,
    day: `${day} ${getMonthName(month)}. ${getDayName(dayOfWeek)}`
  }
}
