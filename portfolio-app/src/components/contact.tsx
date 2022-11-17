import React from 'react';
import {Typography, TextField, Button} from "@mui/material";

const contactStyle = {
    position: 'relative' as 'relative',
    width: '100%',
    height:'100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '2vw',
}

const inputStyle = {
    width:  '60%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'flex-start',
    gap: '1vw',

}

const buttonStyle = {
    width:  '60%',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1vw',
};

const Contact = () => {
    return (
        <div id='contact' style={contactStyle}>
            <div style={inputStyle}>
                <Typography sx={{color:'#ffffff'}}>
                    Contact
                </Typography>
                {/*Email for contact form. Needs validation added to avoid SQLInjection*/}
                <TextField
                    required
                    id='outlined-required'
                    label='Email'
                    placeholder='example@email.com....'
                    autoComplete='on'
                    sx={{
                        "& .MuiInputLabel-root": { color: '#ffffff' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: '#ffffff', opacity: '0.5' },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: '#ffffff',
                                opacity: "1.0"
                            }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: '#ffffff',
                                opacity: "1.0"
                            }
                        },
                        input : { color : '#ffffff' },
                        width : '30vmax'
                    }}
                    variant='outlined'/>
            </div>
            <TextField
                required
                id='outlined-multiline-static'
                multiline
                rows={6}
                label='Message'
                placeholder='Hi George, i was.....'
                sx={{
                    "& .MuiInputLabel-root": { color: '#ffffff' },//styles the label
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: '#ffffff', opacity: '0.5' },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: '#ffffff',
                            opacity: "1.0"
                        }
                    },
                    "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                            borderColor: '#ffffff',
                            opacity: "1.0"
                        }
                    },
                    input : { color : '#ffffff' },
                    width: '60%',
                }}
                variant='outlined'/>
            <div  style={buttonStyle}>
                <Button variant='outlined' sx={{
                    "& .MuiButton-text": { color: '#ffffff' },//styles the label
                }}>
                    Submit
                </Button>
            </div>
        </div>
    )
}
export default Contact;