import React, { forwardRef, MouseEventHandler } from 'react'
import calendarIcon from 'assets/images/calendar.png'
import classes from '../styles.module.scss'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
interface CalendarDropdownProps {
  isDropdownInitiallyOpen?: boolean
  onClick: (s: Date) => void
  selectedDate: Date | string
}

export default function CalendarDropdown({
  onClick,
  selectedDate,
}: CalendarDropdownProps) {
  return (
    <div className={classes.dropdown}>
      <ReactDatePicker
        onChange={onClick}
        customInput={<InitialDropdownButton selectedDate={selectedDate} />}
      />
    </div>
  )
}

interface InitialDropdownButtonProps {
  value?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  selectedDate: Date | string
}

const InitialDropdownButton = forwardRef(
  ({ onClick, selectedDate }: InitialDropdownButtonProps, ref: any) => {
    let dateText = selectedDate.toLocaleString().split(',')[0]
    return (
      <div onClick={onClick} ref={ref}>
        <div className={classes.dropdownText}>{dateText}</div>
        <div className={classes.dropdownImageContainer}>
          <img alt="dropdown-icon" src={calendarIcon} />
        </div>
      </div>
    )
  }
)
