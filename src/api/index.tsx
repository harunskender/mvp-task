import axios from 'axios'
import { mutateReportsBody } from 'models/project'
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

export function mutateReports(body: mutateReportsBody) {
  //console.log(body)
  body.from = '1998-01-01'
  body.to = '2022-01-01'
  return axios.post(BASE_URL + '/report', body)
}
