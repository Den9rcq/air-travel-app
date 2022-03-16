// Я запускал локальный сервер так
// npx json-server flights.json --port 3001

export const useHttp = () => {
  const request = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {

    const response = await fetch(url, { method, body, headers })

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json()
  }
  return { request }
}
