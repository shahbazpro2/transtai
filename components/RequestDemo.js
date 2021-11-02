import { Button, Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material'
import React from 'react'

const RequestDemo = ({ demoRef }) => {
    return (
        <div className="bg-gray-100 py-32" ref={demoRef}>
            <div className="grid grid-cols-12">
                <div className="col-start-5 col-span-4">
                    <div className="text-4xl font-bold text-center">
                        Request a Demo
                    </div>
                    <div className="py-16 px-5 text-center">
                        <form className='space-y-5'>
                            <TextField required label="First Name" fullWidth />
                            <TextField required label="Last Name" fullWidth />
                            <TextField required label="Company" fullWidth />
                            <TextField required label="Email" fullWidth />
                            <TextField required label="Phone Number" fullWidth />
                            <TextField required label="Country" fullWidth />
                            <FormControl
                                required
                            >
                                <FormControlLabel required control={<Checkbox required />} label="Yes, I'd like to receive marketing communications. By opting in, you also agree to the storing and processing of your personal data as described in our Privacy Statement" />
                            </FormControl>
                            <Button type="submit" variant="contained" fullWidth>Request</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestDemo
