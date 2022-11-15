import React from 'react';
import {Typography} from "@mui/material";

const aboutStyle = {
    width: '100%',
    height:'100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: '7vw',
}

const boxStyle = {
    width: '30vw',
    height: '50vh',
    fontFamily: 'Courier New',
}
const About = () => {
    return (
        <div id='about' style={aboutStyle}>
            <div style={boxStyle}>
                <Typography sx={{color: '#ffffff', fontSize: '1.5vmax'}}>
                bio
                </Typography>
                <Typography sx={{color: '#ffffff', fontSize: '1.25vmax'}}>
                    computer science and math graduate from university of canterbury,
                    new zealand with a passion for complex problem solving. looking
                    for software developer roles in salt lake city, utah but open to work in other locations.<br /><br />

                    my area of interest includes cloud computing, backend development,
                    devops, and machine learning. see some of my past projects below
                    and check out my github for what i'm currently working on.<br /><br />


                    when not working, i love to spend time outdoors hiking, biking and skiing.
                </Typography>
            </div>
            <div style={boxStyle}>
                <Typography sx={{color: '#ffffff', fontSize: '1.5vmax'}}>
                    skills
                </Typography>
                <Typography component='span' sx={{color: '#ffffff', fontSize: '1.25vmax'}}>
                    <ul style={{listStyle: 'none', justifyContent: 'space-between', paddingLeft: '0'}}>
                        <li>python</li>
                        <li>c/c++</li>
                        <li>javascript/typescript</li>
                        <li>react</li>
                        <li>nodejs</li>
                        <li>sql</li>
                        <li>apache spark</li>
                        <li>basic ai and machine learning</li>
                        <li>linux</li>
                        <li>ui/ux design</li>
                        <li>written and verbal communication</li>
                    </ul>
                </Typography>
            </div>

        </div>
    );
}
export default About