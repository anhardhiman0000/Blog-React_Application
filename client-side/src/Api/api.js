import React from 'react'; //eslint-disable-line

import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com'
// const URL = 'http://localhost:4500/message'

//Create New Blog || Button
export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/posts`, post);   //post= data of initialValue in CraeteNewBlog.jsx || await used bcoz it is Asynchronous call
        // return await axios.post(`${URL}/create`, post)   
    }
    catch (err) {
        console.log('Error while calling createPost API: ', err)
    }
}

//Home Page View
export const getAllPosts = async () => {
    try {
        let response = await axios.get(`${URL}/posts`);
        // let response = await axios.get(`${URL}/`);
        return response.data;
    }
    catch (error) {
        console.log('Error while calling getAllPosts Api ', error);
    }
}

//Detaail View
export const getPost = async (id) => {
    try{
       let response = await axios.get(`${URL}/posts/${id}`);  // /posts/1   ${id}
    //    let response = await axios.get(`${URL}/spec/${_id}`); 
        return response.data;

    }catch(error){
        console.log('Error while calling getPost Api ', error);
    }
}

//Update the blog
export const updatePost = async (id, post) => {
    try{
       await axios.post(`${URL}/posts/${id}`, post);  // /posts/1   ${id}
    //    await axios.post(`${URL}/update/${_id}`, post)
        
    }catch(error){
        console.log('Error while calling updatetPost Api ', error);
    }
}

//Delete the blog
export const deletePost = async (id) => {
    try{
       await axios.delete(`${URL}/posts/${id}`);  // /posts/1   ${id}
    //    await axios.delete(`${URL}/delete/${_id}`);  
       
    }catch(error){
        console.log('Error while calling deletePost Api ', error);
    }
}





