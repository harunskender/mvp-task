import { ReactComponent as CompanyLogo } from 'assets/icons/logo.svg'
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger-icon.svg'
import classes from './styles.module.scss'

export default function Navigation() {
  return (
    <div className={classes.navigationContainer}>
      <div className={classes.firstPartOfNavigation}>
        <CompanyLogo />
        <HamburgerIcon />
      </div>

      <div className={classes.secondPartOfNavigation}>
        <div className={classes.nameInitials}>
          <div>JD</div>
        </div>
        <div className={classes.name}>John Doe</div>
      </div>
    </div>
  )
}
