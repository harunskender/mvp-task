import classes from './styles.module.scss'

export default function Navigation() {
  return (
    <div className={classes.navigationContainer}>
      <div>
        <div>Logo</div>
        <div>Hamuberger Icon</div>
      </div>

      <div>
        <div>User photo</div>
        <div>User name</div>
      </div>
    </div>
  )
}
