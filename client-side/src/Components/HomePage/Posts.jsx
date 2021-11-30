import React from 'react';

import { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

//Components Import
import Post from "./Post"
import { getAllPosts } from '../../Api/api';

const Posts = () => {
    const [posts, setPosts] = useState([])  //empty array bcoz we pass here multiple values
    // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    useEffect(() => {    //when homePage will get load the want to call api , so we useEffect
        const fetchData = async () => {
            let data = await getAllPosts();
            console.log("Get All Posts: ", data);
            setPosts(data);
        }
        fetchData();
    }, []);


    return (
        posts.map(post => (  //post will update later

            <Grid key={post.id} item lg={3} sm={4} xs={12}>
                <Link to={`/detailsViewPost/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <Post post={post} />
                </Link>
            </Grid>
        ))
    )
}
export default Posts
