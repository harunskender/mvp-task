import React from 'react'
import Filter from 'components/Filter'
import classes from './styles.module.scss'
import { useQuery } from 'react-query'
import { getProjects, getGateways } from 'api'

const PROJECT_QUERY_KEY = 'PROJECT_QUERY_KEY'

export default function Homepage() {
  const { data: projectsData, isLoading: isLoadingProjects } = useQuery(
    PROJECT_QUERY_KEY,
    getProjects
  )
  const { data: gatewaysData, isLoading: isLoadingGateways } = useQuery(
    PROJECT_QUERY_KEY,
    getGateways
  )
  const projects = projectsData?.data?.data
  const gateways = gatewaysData?.data?.data
  console.log(projects)
  console.log(gateways)
  return (
    <div className={classes.homepageContainer}>
      <Filter />
    </div>
  )
}
