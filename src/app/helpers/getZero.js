export const zero = (number) => {
  if (number >= 0 && number < 10) {
    return `0${number}`
  } else {
    return number
  }
}
