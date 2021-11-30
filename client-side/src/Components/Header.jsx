import React from 'react'; 

import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({           // Css Styled-Component || makeStyles-> takes Object in their arguments
    component: {                         //css written here...
        background: '#42f5ec',           //background colour
        color: 'rgb(19, 0, 232)'         // text color

    },
    container: {
        justifyContent: 'center',        // text aligned center
        // justifyContent: 'space-between'

        '& > *': {                       //css applies on child components
            padding: 15,                 //no need to write px, by default pick pixel
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }

});

const Header = () => {

    const classes = useStyles();          // useStyles -> act as fxn so ();|| import with name classes

    return (
        // Nav Bar
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>

                <Link to='/' className={classes.link}><Typography>HOME</Typography></Link>  {/* <Typography></Typography> Replacement of <p> tag in material ui */}

                <Typography>ABOUT_us</Typography>
                <Typography>CONTACT_us</Typography>
                <Typography>PROJECTS</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
