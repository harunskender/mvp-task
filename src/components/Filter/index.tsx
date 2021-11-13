import React, { useState } from 'react'
import CalendarDropdown from './Dropdowns/CalendarDropdown'
import PrimaryDropdown from './Dropdowns/PrimaryDropdown'
import classes from './styles.module.scss'
export default function Filter() {
  const [project, setProject] = useState('All projects')
  const [gateway, setGateway] = useState('All gateways')
  const [fromDate, setFromDate] = useState<Date | string>(
    'From date' || new Date()
  )
  const [toDate, setToDate] = useState<Date | string>('To date' || new Date())

  const onProjectClickHandler = (value: string): void => {
    setProject(value)
  }
  const onGatewayClickHandler = (value: string): void => {
    setGateway(value)
  }
  const onFromDateClickHandler = (value: Date): void => {
    setFromDate(value)
  }
  const onToDateClickHandler = (value: Date): void => {
    setToDate(value)
  }
  const onGenerateHandler = (): void => {
    console.log(project, gateway, fromDate, toDate)
  }

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
            initialOption={project}
            options={['option1', 'option2', 'option3']}
            onClick={onProjectClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            initialOption={gateway}
            options={['option1', 'option2', 'option3']}
            onClick={onGatewayClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown
            initialText="From date"
            onClick={onFromDateClickHandler}
            selectedDate={fromDate}
          />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown
            initialText="To date"
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
