export const getShortName = (text) => {
  const countChar = 10
  if (text.length > countChar) {
    return `${text.slice(0, countChar + 1)}...`
  }
  return text
}
