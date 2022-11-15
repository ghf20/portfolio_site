import React from 'react';
import {Button, ButtonGroup, IconButton} from '@mui/material';
import {LinkedIn, GitHub} from "@mui/icons-material";
import { navEvent } from "./navFunctions";

const buttonStyles = {
    fontFamily: 'Courier New',
    justifyContent: "flex-start",
    textTransform: 'lowercase',
    fontSize: '2vmax',
    color: '#ffffff',
};

const logoStyle = {
    color: '#ffffff',
    marginRight: 'auto',
};

const navButtons = {
    position: 'sticky' as 'sticky',
    top: '0',
};

const groupStyle = {
    textAlign: 'left' as 'left',
    marginLeft: '0',
};


const Nav = () => {

    return (
        <>
        <div style={navButtons}>
            <ButtonGroup orientation='vertical' style={groupStyle}>
                <Button variant='text' sx={buttonStyles} id='aboutButton' onClick={() => navEvent('about')}>about me</Button>
                <Button variant='text' sx={buttonStyles} id='projectsButton' onClick={() => navEvent('projects')}>projects</Button>
                <Button variant='text' sx={buttonStyles} id='contactButton' onClick={() => navEvent('contact')}>contact</Button>
                <IconButton onClick={() => window.open('https://www.linkedin.com/in/george-fraser-nz/', '_black')}>
                    <LinkedIn style={logoStyle}/>
                </IconButton>
                <IconButton onClick={() => window.open('https://github.com/ghf20/', '_black')}>
                    <GitHub style={logoStyle}/>
                </IconButton>
            </ButtonGroup>
        </div>
        </>
    )
}
export default Nav;