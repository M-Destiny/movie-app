import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import '../style.css'

const App = () => {
    return (
        <div>

            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App