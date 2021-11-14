import { getGateways, getProjects } from 'api'
import { PROJECT_QUERY_KEY, GATEWAY_QUERY_KEY } from 'consts'
import { useQuery } from 'react-query'

export default function useHomepage() {
  const { data: projectsData, isLoading: isLoadingProjects } = useQuery(
    PROJECT_QUERY_KEY,
    getProjects
  )
  const { data: gatewaysData, isLoading: isLoadingGateways } = useQuery(
    GATEWAY_QUERY_KEY,
    getGateways
  )
  const projects = projectsData?.data?.data
  const gateways = gatewaysData?.data?.data

  return { projects, gateways, isLoadingProjects, isLoadingGateways }
}
