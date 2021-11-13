import React from 'react'
import CalendarDropdown from './Dropdowns/CalendarDropdown'
import PrimaryDropdown from './Dropdowns/PrimaryDropdown'
import classes from './styles.module.scss'
export default function Filter() {
  const onGenerateHandler = () => {}

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
            initialOption="option1"
            options={['option1', 'option2', 'option3']}
          />
        </div>
        <div className={classes.dropdown}>
          <PrimaryDropdown
            initialOption="option1"
            options={['option1', 'option2', 'option3']}
          />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown />
        </div>
        <div className={classes.dropdown}>
          <CalendarDropdown />
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
