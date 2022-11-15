import React from 'react';
import {Typography} from "@mui/material";

const projectStyle = {
    width: '100%',
    height:'100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: '7vw',
}

const Projects = () => {
    return (
        <div id='projects' style={projectStyle}>
            <Typography sx={{color:'#ffffff'}}>
                TestText
            </Typography>
        </div>
    )
};
export default Projects;