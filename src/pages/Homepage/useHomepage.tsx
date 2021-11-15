import { getGateways, getProjects } from 'api'
import { PROJECT_QUERY_KEY, GATEWAY_QUERY_KEY } from 'consts'
import { useQuery } from 'react-query'
import { ProjectProps, GatewayProps } from 'models/project'

export default function useHomepage() {
  const { data: projectsData, isLoading: isLoadingProjects } = useQuery(
    PROJECT_QUERY_KEY,
    getProjects
  )
  const { data: gatewaysData, isLoading: isLoadingGateways } = useQuery(
    GATEWAY_QUERY_KEY,
    getGateways
  )
  const projects = projectsData?.data?.data as ProjectProps[]
  const gateways = gatewaysData?.data?.data as GatewayProps[]

  return { projects, gateways, isLoadingProjects, isLoadingGateways }
}
