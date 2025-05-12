import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SuperAdmin from './pages/SuperAdmin'

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}> </Route>
                <Route path='/superadmin' element={<SuperAdmin/>}> </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App