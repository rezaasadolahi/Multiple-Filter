import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Main from './Pages/Main'
// Components
import Header from './Components/Header'




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path='*' element={<h1>404 page not found !</h1>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App