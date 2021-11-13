import React from 'react'
import classes from './styles.module.scss'

interface PrimaryDropdownProps {
  options: string[]
  selected: string
  setSelected: (a: string) => void
}

export default function PrimaryDropdown({
  options,
  selected,
  setSelected,
}: PrimaryDropdownProps) {
  return (
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
  )
}
