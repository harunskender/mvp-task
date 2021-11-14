import React from 'react'
import classes from './styles.module.scss'
import firstNavigationIcon from 'assets/icons/navigation-icon_1.svg'
import secondNavigationIcon from 'assets/icons/navigation-icon_2.svg'
import thirdNavigationIcon from 'assets/icons/navigation-icon_3.svg'
import fourthNavigationIcon from 'assets/icons/navigation-icon_4.svg'
import fifthNavigationIcon from 'assets/icons/navigation-icon_5.svg'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className={classes.navigationContainer}>
      <div className={classes.navigationItem}>
        <Link to="/firstPath">
          <img alt="navigation-item" src={firstNavigationIcon} />
        </Link>
      </div>
      <div className={classes.navigationItem}>
        <Link to="/secondPath">
          <img alt="navigation-item" src={secondNavigationIcon} />
        </Link>
      </div>
      <div className={classes.navigationItem}>
        <Link to="/thirdPath">
          <img alt="navigation-item" src={thirdNavigationIcon} />
        </Link>
      </div>
      <div className={classes.navigationItem}>
        <Link to="/">
          <img alt="navigation-item" src={fourthNavigationIcon} />
        </Link>
      </div>
      <div className={classes.navigationItem}>
        <Link to="/fifthPath">
          <img alt="navigation-item" src={fifthNavigationIcon} />
        </Link>
      </div>
    </div>
  )
}
