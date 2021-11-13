import React, { useState, forwardRef, MouseEventHandler } from 'react'
import calendarIcon from 'assets/images/calendar.png'
import classes from '../styles.module.scss'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { dateToString } from 'utils'
interface CalendarDropdownProps {
  isDropdownInitiallyOpen?: boolean
  onClick: (s: any) => void
  selectedDate: Date | string
}

export default function CalendarDropdown({
  onClick,
  selectedDate,
}: CalendarDropdownProps) {
  return (
    <div className={classes.dropdown}>
      <ReactDatePicker
        onChange={(e) => {
          onClick(e)
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
  ({ onClick, selectedDate }: InitialDropdownButtonProps, ref: any) => {
    const dateText = dateToString(selectedDate)
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
