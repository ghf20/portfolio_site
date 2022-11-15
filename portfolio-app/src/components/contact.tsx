import React from 'react';
import {Typography} from "@mui/material";

const contactStyle = {
    width: '100%',
    height:'100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: '7vw',
}

const Contact = () => {
    return (
        <div id='contact' style={contactStyle}>
            <Typography sx={{color:'#ffffff'}}>
                Contact
            </Typography>
        </div>
    )
}
export default Contact;