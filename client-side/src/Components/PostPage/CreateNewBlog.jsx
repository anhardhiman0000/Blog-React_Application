import React from 'react'; 

import { useState } from "react";

import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';

import { createPost } from "../../Api/api";


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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    textField: {
        flex: 1, //strech the text field to full screen
        margin: '0 30px',
        fontSize: 25,

    },
    textarea: {
        width: '100%',
        marginTop: 40,
        border: 'none',
        fontSize: 18,

        '&:focus-visible': {
            outline: 'none'
        }
    }

}));

const initialValues = {  //initial value Declare
    userId: '',
    id: '',
    title: '',
    body: '',
    picture: '',
    username: '',
    categories: 'All',
    createdDate: new Date()

}

const CreateNewBlog = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2020/06/01/13/24/workers-5246640_960_720.jpg'
    const navigate = useNavigate();

    const [post, setPost] = useState(initialValues)  //initial value assign with useState

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })  //target with name for identify same onChange fxn
    }

    const savePost = async () => {
        await createPost(post);
        navigate('/')

    }
    //    function savePost(){
    //         createPost(post);
    //     }

    return (
        <Box className={classes.container}>
            <img src={url} alt="image is loading..." className={classes.image} />

            <FormControl className={classes.form} >

                <AddCircle fontSize="large" color="action" />

                <InputBase onChange={(e) => handleChange(e)}
                    placeholder="Title"
                    className={classes.textField}
                    name='title'    //same handleChange Identify
                />

                <Button onClick={savePost} variant='contained' color='primary'>Publish</Button>

            </FormControl>

            <TextareaAutosize
                rowsMin={10}
                placeholder="Write your story here..."
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name='body'
            />
        </Box>
    )
}
export default CreateNewBlog
