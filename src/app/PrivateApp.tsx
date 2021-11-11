import Dropdown from 'components/Dropdown'
import Navigation from 'components/Navigation'
import React from 'react'

export default function PrivateApp() {
  return (
    <>
      <Navigation />
      <Dropdown initialOption="Project 1" variant="primary" />
    </>
  )
}
