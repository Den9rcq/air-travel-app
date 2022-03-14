export const sortingAirlinesByBestPrice = (arr) => {
  return arr.map(item => ({
    name: item.carrier.caption,
    price: item.price.amount
  }))
    .sort((a, b) => a.price.amount - b.price.amount)
    .reduce((a, c) => {
      if (Object.values(a).map(e => e.name).indexOf(c.name) === -1) {
        a.push(c)
      }
      return a
    }, [])
}
