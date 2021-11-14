import React from 'react'
import CalendarDropdown from './Dropdowns/CalendarDropdown'
import PrimaryDropdown from './Dropdowns/PrimaryDropdown'
import classes from './styles.module.scss'
import { ProjectProps, GatewayProps } from 'models/project'

interface FilterProps {
  projects: ProjectProps[]
  gateways: GatewayProps[]
  project: string
  gateway: string
  fromDate: string | Date
  toDate: string | Date
  onProjectClickHandler: (p: string) => void
  onGatewayClickHandler: (p: string) => void
  onFromDateClickHandler: (p: Date) => void
  onToDateClickHandler: (p: Date) => void
  onGenerateHandler: () => void
  isLoadingProjects: boolean
  isLoadingGateways: boolean
}

export default function Filter({
  projects,
  gateways,
  project,
  gateway,
  fromDate,
  toDate,
  onProjectClickHandler,
  onGatewayClickHandler,
  onFromDateClickHandler,
  onToDateClickHandler,
  onGenerateHandler,
  isLoadingProjects,
  isLoadingGateways,
}: FilterProps) {
  if (isLoadingProjects && isLoadingGateways)
    return <div className={classes.loadingSpinner}></div>

  const projectOptions = projects?.map((project) => project.name)
  const gatewayOptions = gateways?.map((gateway) => gateway.name)

  return projects?.length ? (
    <div className={classes.filterContainer}>
      <div>
        <div className={classes.filterTitle}>Reports</div>
        <div className={classes.filterDescription}>
          Easily generate a report of your transactions
        </div>
      </div>
      <div className={classes.filterDropdownsContainer}>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            selected={project}
            options={projectOptions}
            onClick={onProjectClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            selected={gateway}
            options={gatewayOptions}
            onClick={onGatewayClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown
            onClick={onFromDateClickHandler}
            selectedDate={fromDate}
          />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown
            onClick={onToDateClickHandler}
            selectedDate={toDate}
          />
        </div>
        <div>
          <div className={classes.generateButton} onClick={onGenerateHandler}>
            Generate report
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
