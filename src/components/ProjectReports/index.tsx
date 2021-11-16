import classes from './styles.module.scss'
import ProjectDropdown from 'components/ProjectDropdown'
import { IProjectDetails } from 'models/project'

interface IProjectReports {
  showToggleButton?: boolean
  projectsDetails: Array<IProjectDetails> | undefined
  showGateways: boolean
  projectName: string
}

export default function ProjectReports({
  showToggleButton,
  projectsDetails = [],
  showGateways,
  projectName,
}: IProjectReports) {
  return (
    <div className={classes.reports}>
      <ProjectDropdown
        showToggleButton={showToggleButton}
        projectName={projectName}
        projectData={projectsDetails}
        showGateways={showGateways}
      />
    </div>
  )
}
