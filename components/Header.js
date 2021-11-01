import React from 'react'

const Header = () => {
    return (
        <div className="h-16 absolute w-full bg-white opacity-70 flex px-10">
            <div className="logo w-48">
                <img src="/logo-white.png" alt="logo" />
            </div>
            <div className="flex items-center links space-x-10 ml-auto">
                <div className="text-lg font-medium hover:text-blue-700 cursor-pointer">Home</div>
                <div className="text-lg font-medium hover:text-blue-700 cursor-pointer">Services</div>
                <div className="text-lg font-medium hover:text-blue-700 cursor-pointer">About</div>
                <div className="text-lg font-medium hover:text-blue-700 cursor-pointer">Contact</div>
            </div>
        </div>
    )
}

export default Header
