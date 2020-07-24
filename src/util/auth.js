import Cookies from 'js-cookie'

const TokenKey = 'tongda_token'

export function gettoken() {
  return Cookies.get(TokenKey)
}

export function settoken(token) {
  return Cookies.set(TokenKey, token)
}

export function removetoken() {
  return Cookies.remove(TokenKey)
}
