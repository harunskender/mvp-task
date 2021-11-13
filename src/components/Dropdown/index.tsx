import React, { useState } from 'react'
import arrowIcon from 'assets/images/down-arrow.png'
import calendarIcon from 'assets/images/calendar.png'
import classes from './styles.module.scss'
import PrimaryDropdown from './PrimaryDropdown'
import CalendarDropdown from './CalendarDropdown'

type variantType = 'primary' | 'calendar'

interface DropdownProps {
  isDropdownInitiallyOpen?: boolean
  initialOption: string
  variant: variantType
  options: string[]
}

const VARIANT_TYPES = {
  PRIMARY: 'primary',
  CALENDAR: 'calendar',
} as const

export default function Dropdown({
  isDropdownInitiallyOpen = false,
  initialOption,
  variant,
  options,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(isDropdownInitiallyOpen)
  const [selected, setSelected] = useState(initialOption)

  const isPrimaryType = (): boolean => variant === VARIANT_TYPES.PRIMARY

  const InitialDropdownButton = () => {
    return (
      <div>
        <div className={classes.dropdownText}>{selected}</div>
        <div className={classes.dropdownImageContainer}>
          <img
            alt="dropdown-icon"
            src={isPrimaryType() ? arrowIcon : calendarIcon}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={classes.dropdown} onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? (
        <InitialDropdownButton />
      ) : isPrimaryType() ? (
        <PrimaryDropdown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <CalendarDropdown />
      )}
    </div>
  )
}
