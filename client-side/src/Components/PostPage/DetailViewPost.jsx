import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';


import { Box, makeStyles, Typography } from "@material-ui/core"
import { Delete, Edit } from "@material-ui/icons";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../../Api/api";


const useStyle = makeStyles((theme) => ({
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }

    },
    container: {
        padding: '0 100px',

    },
    icons: {
        float: 'right',
    },

    icon: {
        margin: 10,
        border: '2px solid #42f5ec',
        padding: 5,
        borderRadius: 10,

    },
    title: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',

    },
    subHeading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    }
}));

const DetailViewPost = () => {
    const { id } = useParams();
    // console.log("ssssssssssssssssssfg", id)
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/01/00/52/architecture-2804083_960_720.jpg'
    const navigate = useNavigate();


    const [post, setPost] = useState({}); //single post {}

    useEffect(() => {
        const fetchData = async () => {

            let data = await getPost(id);
            console.log("Get Post Update from DetailViewPost ", data);
            setPost(data);
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {
        await deletePost(post.id);
        navigate('/');
    }

    return (
        <Box className={classes.container}>

            <img src={url} alt="image is loading..." className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/updateView/${post.id}`}><Edit className={classes.icon} color="primary" /></Link>
                <Delete onClick={() => deleteBlog()} className={classes.icon} color="secondary" />
            </Box>
            <Typography className={classes.title}>{post.title}</Typography>

            <Box className={classes.subHeading}>
                <Typography >Author: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
                <Typography style={{ marginLeft: 'auto' }} >{post.createdDate}.toDateString()</Typography>
            </Box>

            <Typography>{post.body}</Typography>

        </Box>


    )
}
export default DetailViewPost

