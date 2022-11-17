import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {LinkedIn, GitHub} from "@mui/icons-material";
import { navEvent } from "./navFunctions";

const buttonStyles = {
    fontFamily: 'Courier New',
    justifyContent: "flex-start",
    textTransform: 'lowercase',
    fontSize: '2vmax',
    color: '#ffffff',
};

const socialStyles = {
    fontFamily: 'Courier New',
    justifyContent: "flex-start",
    textTransform: 'lowercase',
    fontSize: '1vmax',
    color: '#ffffff',
};


const navButtons = {
    position: 'sticky' as 'sticky',
    top: '0',
    zIndex: '100',
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
                <Button variant='text' sx={socialStyles} id='linkedinButton' onClick={() => window.open('https://www.linkedin.com/in/george-fraser-nz/', '_black')} startIcon={<LinkedIn />}>LinkedIn</Button>
                <Button variant='text' sx={socialStyles} id='linkedinButton' onClick={() => window.open('https://github.com/ghf20/', '_black')} startIcon={<GitHub />}>GitHub</Button>
            </ButtonGroup>
        </div>
        </>
    )
}
export default Nav;