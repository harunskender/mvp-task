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
  return axios.post(BASE_URL + '/reports', body)
}
