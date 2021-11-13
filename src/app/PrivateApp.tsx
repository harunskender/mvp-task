import Dropdown from 'components/Dropdown'
import Navigation from 'components/Navigation'
import React from 'react'

export default function PrivateApp() {
  return (
    <>
      <Navigation />
      <Dropdown
        initialOption="option2"
        variant="primary"
        options={['option1', 'option3', 'option2']}
      />
    </>
  )
}
