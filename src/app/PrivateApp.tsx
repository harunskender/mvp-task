import React from 'react'
import Navigation from 'components/Navigation'
import Header from 'components/Header/index'
import Homepage from 'pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function PrivateApp() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
