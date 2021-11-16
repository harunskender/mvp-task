import classes from './styles.module.scss'
import ProjectDataTable from 'components/ProjectDataTable'
import { useState } from 'react'
import { AmountCurrency, IProjectDetails } from 'models/project'

interface IProjectDropdown {
  showToggleButton?: boolean
  projectName: string
  projectData: IProjectDetails[]
  showGateways?: boolean
}

export default function ProjectDropdown({
  showToggleButton = false,
  projectName,
  projectData,
  showGateways = false,
}: IProjectDropdown) {
  const [showProjectDataTable, setShowProjectDataTable] = useState(false)

  function toggle() {
    setShowProjectDataTable(!showProjectDataTable)
  }

  let amount: AmountCurrency = {
    amount: 0,
    currency: projectData[0] ? projectData[0].amount.currency : 'USD',
  }

  projectData.forEach((data) => {
    amount.amount += data.amount.amount
  })

  return (
    <div>
      {showToggleButton && (
        <div onClick={toggle} className={classes.toggleButton}>
          <div>{projectName}</div>
          <div>Total: {`${Math.round(amount.amount)} ${amount.currency}`}</div>
        </div>
      )}

      {showProjectDataTable && (
        <div className={classes.table}>
          <ProjectDataTable
            projectData={projectData}
            showGateways={showGateways}
          />
        </div>
      )}
    </div>
  )
}
