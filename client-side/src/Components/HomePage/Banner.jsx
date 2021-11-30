import React from 'react';

import { makeStyles, Box, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    image: {
        background: `url(${'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg'}) center/55% #000`, // `  repeate-x `|| bcoz want image in the form of string 
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', //without display flex it will not work
        justifyContent: 'center', //BLOG DEvelopment in TopCenter CenterCenter
        '& :first-child': {
            fontSize: 59,
            color: 'white',
            lineHeight: 1,
            
        },
        '& :last-child': {
            fontSize: 19,
            background: 'white',
        }


    }
});


const Banner = () => {
    const classes = useStyles();

    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>MERN Stack Development</Typography>

        </Box>
    );
}
export default Banner  // imported in Home
