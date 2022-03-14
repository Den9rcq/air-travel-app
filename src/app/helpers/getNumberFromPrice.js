export const getNumberFromPrice = (text) => {
  const index = text.indexOf(".")
  return Number(text.slice(0,index))
}
