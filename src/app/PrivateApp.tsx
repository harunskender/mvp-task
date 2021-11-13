import React from 'react'
import PrimaryDropdown from 'components/Dropdowns/PrimaryDropdown'
import Navigation from 'components/Navigation'
import CalendarDropdown from 'components/Dropdowns/CalendarDropdown'

export default function PrivateApp() {
  return (
    <>
      <Navigation />
      <PrimaryDropdown
        options={['option1', 'option3', 'option2']}
        initialOption={'option1'}
      />
      <CalendarDropdown />
    </>
  )
}
