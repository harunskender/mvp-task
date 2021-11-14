import React from 'react'
import Filter from 'components/Filter'
import ProjectCharts from 'components/ProjectCharts'
import useHomepage from './useHomepage'
import classes from './styles.module.scss'

export default function Homepage() {
  const { projects, gateways } = useHomepage()
  return (
    <div className={classes.homepageContainer}>
      <Filter projects={projects} gateways={gateways} />
      <ProjectCharts projects={projects} />
    </div>
  )
}
