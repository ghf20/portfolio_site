import React from 'react';
import { motion } from 'framer-motion'
import {Typography, IconButton} from "@mui/material";
import { ArrowCircleDown } from '@mui/icons-material';
import { navEvent } from "./navFunctions";

const nameStyle = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Courier New',
    textTransform: 'lowercase',
    textAlign: 'center',
    fontSize: '4vmax',
    color: '#ffffff',
};

const textStyle = {
    position: 'absolute' as 'absolute',
    top: '60%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Courier New',
    textTransform: 'lowercase',
    fontSize: '2.5vmax',
    textAlign: 'center',
    color: '#ffffff',
};

const iconStyle = {
    color: '#ffffff',
    height: '0.5',
    width: '2vmax',
};

const labelStyle = {
    fontFamily: 'Courier New',
    textTransform: 'lowercase',
    fontSize: '1vmax',

    color: '#ffffff',
};

const divStyle = {
    position: 'absolute' as 'absolute',
    bottom: '0',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center' as 'center',
}


const HomePage = () => {
    return (
        <div style={{width: '100%', height:'100vh', justifyContent: 'center'}}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2}}>
                <Typography sx={nameStyle}>
                    george fraser
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1}}>
                <Typography sx={textStyle}>
                    computer science & math graduate
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2}}>
                <>
                    <div style={divStyle}>
                        <Typography sx={labelStyle}>
                            scroll down
                        </Typography>
                        <IconButton onClick={() => navEvent('about')}>
                            <ArrowCircleDown sx={iconStyle}/>
                        </IconButton>
                    </div>
                </>
            </motion.div>


        </div>
    );
};

export default HomePage;
