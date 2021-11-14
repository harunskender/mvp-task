import React, { useState } from 'react'
import arrowIcon from 'assets/images/down-arrow.png'
import classes from '../styles.module.scss'

interface PrimaryDropdownProps {
  isDropdownInitiallyOpen?: boolean
  selected: string
  options: string[]
  onClick: (s: string) => void
}

export default function PrimaryDropdown({
  isDropdownInitiallyOpen = false,
  selected,
  options,
  onClick,
}: PrimaryDropdownProps) {
  const [isOpen, setIsOpen] = useState(isDropdownInitiallyOpen)

  return (
    <div className={classes.dropdown} onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? (
        <InitialDropdownButton selected={selected} />
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
                onClick={() => onClick(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

const InitialDropdownButton = ({ selected }: { selected: string }) => {
  return (
    <div>
      <div className={classes.dropdownText}>{selected}</div>
      <div className={classes.dropdownImageContainer}>
        <img alt="dropdown-icon" src={arrowIcon} />
      </div>
    </div>
  )
}
