import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import router from 'next/router'

const Header = () => {
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
        <div className={`fixed w-full flex px-10 z-10 ${bg ? 'bg-[#010024]' : ''}`}>
            <div className="logo w-[30%]">
                <img src="/logo_transparent.png" alt="logo" />
            </div>
            <div className="flex items-center links space-x-5 ml-auto text-white">
                <Button variant="contained" disableElevation href="#home">Home</Button>
                <Button variant="contained" disableElevation href="#about">About</Button>
                <Button variant="contained" disableElevation href="#services">Products & Concepts </Button>
                <Button variant="contained" disableElevation href="#contact">Contact</Button>
                <Button variant="contained" disableElevation href="#demo">Request a Demo</Button>
                <Button variant="contained" disableElevation onClick={() => router.push('http://app.transit-ai.com')}>Login</Button>
            </div>
        </div>
    )
}

export default Header
