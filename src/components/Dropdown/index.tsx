import React, { useState } from 'react'
import arrowIcon from 'assets/images/down-arrow.png'
import calendarIcon from 'assets/images/calendar.png'
import classes from './styles.module.scss'

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

  const isPrimaryType = (variant: variantType): boolean =>
    variant === VARIANT_TYPES.PRIMARY

  return (
    <div className={classes.dropdown} onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? (
        <div>
          <div className={classes.dropdownText}>{selected}</div>
          <div className={classes.dropdownImageContainer}>
            <img
              alt="dropdown-icon"
              src={isPrimaryType(variant) ? arrowIcon : calendarIcon}
            />
          </div>
        </div>
      ) : (
        <div>
          {options
            .reduce((acc: string[], option: string) => {
              if (selected === option) return [selected, ...acc]
              return [...acc, option]
            }, [])
            .map((option) => (
              <div
                className={classes.dropdownText}
                key={option}
                onClick={() => setSelected(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
