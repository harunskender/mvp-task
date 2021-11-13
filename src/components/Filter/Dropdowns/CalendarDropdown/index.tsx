import React, { useState, forwardRef, MouseEventHandler } from 'react'
import calendarIcon from 'assets/images/calendar.png'
import classes from '../styles.module.scss'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
interface CalendarDropdownProps {
  isDropdownInitiallyOpen?: boolean
  initialDate?: any
}

export default function CalendarDropdown({
  isDropdownInitiallyOpen = false,
  initialDate,
}: CalendarDropdownProps) {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date())

  return (
    <div className={classes.dropdown}>
      <ReactDatePicker
        startDate={selectedDate}
        onChange={(e) => {
          setSelectedDate(e)
        }}
        customInput={<InitialDropdownButton selectedDate={selectedDate} />}
      />
    </div>
  )
}

interface InitialDropdownButtonProps {
  value?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  selectedDate: any
}

const InitialDropdownButton = forwardRef(
  ({ value, onClick, selectedDate }: InitialDropdownButtonProps, ref: any) => {
    const dateText = selectedDate.toLocaleString().split(',')[0]
    console.log(dateText)
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
