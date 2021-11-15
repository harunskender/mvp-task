import classes from './styles.module.scss'
import ProjectDropdown from 'components/ProjectDropdown'
import { IProjectDetails } from 'models/project'

interface IProjectReports {
  showToggleButton?: boolean
  projectsDetails: Array<IProjectDetails> | undefined
  showGateways: boolean
}

export default function ProjectReports({
  showToggleButton,
  projectsDetails = [],
  showGateways,
}: IProjectReports) {
  return (
    <div className={classes.reports}>
      <div className={classes.activeFilters}>project | gateway</div>
      <ProjectDropdown
        showToggleButton={showToggleButton}
        projectName="Project 1"
        projectData={projectsDetails}
        showGateways={showGateways}
      />
    </div>
  )
}
