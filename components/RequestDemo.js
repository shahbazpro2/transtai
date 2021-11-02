import { Alert, Button, Checkbox, FormControl, FormControlLabel, Snackbar, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const RequestDemo = ({ demoRef }) => {
    const [open, setOpen] = useState(false)
    const form = useRef();


    const handleClose = () => {
        setOpen(!open)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_nir0wzt', 'template_4ni5hrj', form.current, 'user_p0tLnfonqx58n7WOLMbPm')
            .then((result) => {
                setOpen(true)
                form.current.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="bg-gray-100 py-32" ref={demoRef}>
            <div className="grid grid-cols-12">
                <div className="col-start-5 col-span-4">
                    <div className="text-4xl font-bold text-center">
                        Request a Demo
                    </div>
                    <div className="py-16 px-5 text-center">
                        <form className='space-y-5' ref={form} onSubmit={sendEmail}>
                            <TextField required label="First Name" name="first_name" fullWidth />
                            <TextField required label="Last Name" name="last_name" fullWidth />
                            <TextField required label="Company" name="company" fullWidth />
                            <TextField required label="Email" name="email" fullWidth />
                            <TextField required label="Phone Number" name="phone" fullWidth />
                            <TextField required label="Country" name="country" fullWidth />
                            <FormControl
                                required
                                name="checkbox"
                            >
                                <FormControlLabel required control={<Checkbox name="checkbox" required />} label="Yes, I'd like to receive marketing communications. By opting in, you also agree to the storing and processing of your personal data as described in our Privacy Statement" />
                            </FormControl>
                            <Button type="submit" variant="contained" fullWidth>Request</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email sent successfully!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default RequestDemo
