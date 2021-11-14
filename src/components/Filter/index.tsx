import React from 'react'
import CalendarDropdown from './Dropdowns/CalendarDropdown'
import PrimaryDropdown from './Dropdowns/PrimaryDropdown'
import classes from './styles.module.scss'
import useFilter from './useFilter'

export default function Filter() {
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
            options={['option1', 'option2', 'option3']}
            onClick={onProjectClickHandler}
          />
        </div>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            selected={gateway}
            options={['option1', 'option2', 'option3']}
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
