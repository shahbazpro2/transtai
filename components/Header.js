import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import router from 'next/router'

const Header = ({ homeRef, serviceRef, contactRef, demoRef, handleScroll }) => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset > 1) {
                setBg(true)
            } else {
                setBg(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className={`fixed w-full flex px-10 z-10 ${bg ? 'bg-[#010024]' : 'bg-[#000120db]'}`}>
            <div className="logo w-[30%]">
                <img src="/logo_transparent.png" alt="logo" />
            </div>
            <div className="flex items-center links space-x-5 ml-auto text-white">
                <Button variant="outlined" sx={{ color: 'white' }} disableElevation onClick={() => handleScroll(homeRef)}>Home</Button>
                <Button variant="outlined" sx={{ color: 'white' }} disableElevation onClick={() => handleScroll(serviceRef)}>Products & Concepts </Button>
                <Button variant="outlined" sx={{ color: 'white' }} disableElevation onClick={() => handleScroll(contactRef)}>Contact</Button>
                <Button variant="outlined" sx={{ color: 'white' }} disableElevation onClick={() => handleScroll(demoRef)}>Request a Demo</Button>
                <Button variant="outlined" sx={{ color: 'white' }} disableElevation onClick={() => router.push('http://app.transit-ai.com')}>Login</Button>
            </div>
        </div>
    )
}

export default Header
