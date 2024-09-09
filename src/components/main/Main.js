import React from 'react'
import { Outlet } from 'react-router-dom'
import 'assets/css/main.css'

function Main() {
    return (
        <main id='main' className='main'>
            <Outlet />
        </main>
    );
}

export default Main;