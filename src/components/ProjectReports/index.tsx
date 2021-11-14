import classes from './styles.module.scss'
import ProjectDropdown from 'components/ProjectDropdown'
import { IProjectDetails } from 'models/project'

interface IProjectReports {
  showToggleButton?: boolean
  projectsDetails: Array<IProjectDetails>
}

export default function ProjectReports({
  showToggleButton,
  projectsDetails = [],
}: IProjectReports) {
  return (
    <div className={classes.reports}>
      <div className={classes.activeFilters}>project | gateway</div>
      {projectsDetails.map((projectDetails: IProjectDetails, i: number) => (
        <ProjectDropdown
          key={`${'neki key'}_${i}`}
          showToggleButton={showToggleButton}
          projectName="Project 1"
          projectData={[
            {
              date: '03/92/2021',
              gateway: 'g1',
              transactionId: 'sadas',
              amount: {
                amount: 230,
                currency: 'USD',
              },
            },
            {
              date: '03/92/2021',
              gateway: 'g2',
              transactionId: 'sadas',
              amount: {
                amount: 230,
                currency: 'USD',
              },
            },
            {
              date: '03/92/2021',
              gateway: 'g3',
              transactionId: 'sadas',
              amount: {
                amount: 230,
                currency: 'USD',
              },
            },
          ]}
        />
      ))}
    </div>
  )
}
