import React from 'react'
import Filter from 'components/Filter'
import classes from './styles.module.scss'
import { useQuery } from 'react-query'
import { getProjects, getGateways } from 'api'
import ProjectDataTable from 'components/ProjectDataTable'
import ProjectReports from 'components/ProjectReports'

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
        {/* Ako je odabran specifican projekat (tj. ako nisu odabrani svi projekti)  
        onda ne treba slati showToggleButtons,
        u suprotnom, treba slati showToggleButtons*/}
        <ProjectReports showToggleButton projectsDetails={[]} />
      </div>
  )
}
