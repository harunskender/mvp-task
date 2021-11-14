import React from 'react'
import CalendarDropdown from './Dropdowns/CalendarDropdown'
import PrimaryDropdown from './Dropdowns/PrimaryDropdown'
import classes from './styles.module.scss'
import useFilter from './useFilter'

interface ProjectProps {
  description: string
  gatewayIds: string[]
  image: string
  industry: string
  name: string
  projectId: string
  rule: string
  structure: string
  userIds: string[]
  website: string
}

interface GatewayProps {
  apiKey: string
  description: string
  gatewayId: string
  name: string
  secondaryApiKey: string
  type: string
  userIds: string[]
}

interface FilterProps {
  projects: ProjectProps[]
  gateways: GatewayProps[]
}

export default function Filter({ projects, gateways }: FilterProps) {
  const {
    project,
    gateway,
    fromDate,
    toDate,
    onProjectClickHandler,
    onGatewayClickHandler,
    onFromDateClickHandler,
    onToDateClickHandler,
    onGenerateHandler,
  } = useFilter()

  return (
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
            options={[
              'All projects',
              ...projects.map((project) => project.name),
            ]}
            onClick={onProjectClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            selected={gateway}
            options={[
              'All projects',
              ...gateways.map((gateway) => gateway.name),
            ]}
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
  )
}
