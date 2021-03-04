import Cookies from 'js-cookie'

const TokenKey = 'E7359A58976121439D3E1A66F9DB19C0'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
