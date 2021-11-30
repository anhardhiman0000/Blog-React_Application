import React from 'react';

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 20,
        border: '2px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // width: '20%',
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image:{
        height: 150,
        width: '100%',
        objectFit: 'cover',   //post image will fit with border not streched
        borderRadius: '10px 10px 10px 10px'
    
    },
    text: {
        color: '#878787',
        fontSize: 12,
        
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
    },
    detail : {
        fontSize: 15,
        wordBreak: "break-word",
    }
})


const Post = (post) => {
    const classes = useStyles();
    const url = post.picture || 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_960_720.jpg'

    return (
        <Box className={classes.container}>
            <img src={url} alt="image is loading..." className={classes.image} />
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>Author: {post.username} </Typography>
            <Typography className={classes.detail}>{post.body}</Typography>

        </Box>
    );
}
export default Post

