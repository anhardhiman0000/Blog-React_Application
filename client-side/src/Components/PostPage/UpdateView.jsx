import React from 'react';

import { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import { getPost, updatePost } from '../../Api/api';


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
    username: 'Anhar Dhiman',
    categories: 'All',
    createdDate: new Date()

}

const UpdateView = () => {
     const { id } = useParams();
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2020/06/01/13/24/workers-5246640_960_720.jpg'
     const navigate = useNavigate();
      
      const [post, setPost] = useState(initialValues);

       const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })  //target with name for identify same onChange fxn
    }

     const updateBlog = async () => {
        await updatePost(id, post);
        navigate(`/detailsViewPost/${id}`);

    }
      useEffect(() => {
          const fetchData = async () =>{
              let data = await getPost(id);
              console.log("Data from UpdateView useEffect getPost ", data)
              setPost(data);
          }
          fetchData();
      }, [])
    
    return (
        <Box className={classes.container}>
            <img src={url} alt="image is loading..." className={classes.image} />

            <FormControl className={classes.form} >

                <AddCircle fontSize="large" color="action" />

                <InputBase placeholder="Title" 
                onChange={(e) => handleChange(e)} 
                value={post.title} 
                className={classes.textField}
                name='title' />

                <Button onClick={updateBlog} variant='contained' color='primary'>Update</Button>

            </FormControl>

            <TextareaAutosize
                rowsMin={10}
                placeholder="Write your story here..."
                className={classes.textarea}
                value={post.body}
                onChange={(e) => handleChange(e)}
                name='body'
            />
        </Box>
    )
}
export default UpdateView

