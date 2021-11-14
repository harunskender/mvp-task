import axios from 'axios'
const BASE_URL = 'http://178.63.13.157:8090/mock-api/api'

export function getProjects() {
  return axios.get(BASE_URL + '/projects')
}

export function getGateways() {
  return axios.get(BASE_URL + '/gateways')
}

export function getUsers() {
  return axios.get(BASE_URL + '/users')
}
