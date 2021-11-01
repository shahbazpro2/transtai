import { Button, TextField } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <div className="bg-gray-100 pt-32 pb-40">
            <div className="container mx-auto px-20">
                <div className="text-4xl font-bold text-center">
                    Contact
                </div>
                <div className="py-16 px-5 text-center space-y-5">
                    <TextField label="First Name" fullWidth />
                    <TextField label="Last Name" fullWidth />
                    <TextField label="Company" fullWidth />
                    <TextField label="Email" fullWidth />
                    <TextField label="Phone Number" fullWidth />
                    <TextField label="Country" fullWidth />
                    <Button variant="contained" fullWidth>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
