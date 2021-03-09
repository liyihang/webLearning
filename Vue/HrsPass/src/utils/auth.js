import Cookies from 'js-cookie'
// token
const TokenKey = 'E7359A58976121439D3E1A66F9DB19C0'
// timekey
const timeKey = 'E7359A5897'
// get timestamp
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// set timestamp
export function setTimeStamp() {
  return Cookies.set(timeKey, Date.now())
}
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
