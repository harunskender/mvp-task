import React from 'react'
import Filter from 'components/Filter'
import useHomepage from './useHomepage'
import classes from './styles.module.scss'
import ProjectReports from 'components/ProjectReports'

export default function Homepage() {
  const { projects, gateways } = useHomepage()
  return (
    <div className={classes.homepageContainer}>
      <Filter projects={projects} gateways={gateways} />
      {/* Ako je odabran specifican projekat (tj. ako nisu odabrani svi projekti)
        onda ne treba slati showToggleButtons,
        u suprotnom, treba slati showToggleButtons*/}
      <ProjectReports showToggleButton projectsDetails={[]} />
    </div>
  )
}
