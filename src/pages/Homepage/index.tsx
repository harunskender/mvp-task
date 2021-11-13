import React from 'react'
import Filter from 'components/Filter'
import classes from './styles.module.scss'

export default function Homepage() {
  return (
    <div className={classes.homepageContainer}>
      <Filter />
    </div>
  )
}
