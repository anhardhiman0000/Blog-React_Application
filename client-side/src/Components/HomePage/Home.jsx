import React from 'react';
import { Grid } from '@material-ui/core';

//Components Importing
import Banner from "./Banner"
import Category from "./Categories";
import Posts from "./Posts";


const Home = () => {
    return (
        <>
            <Banner />
            <Grid container >   {/* 'container' parent Grid */}    {/* Used Grid in place of box in order to make responsive this field */}
                <Grid item lg={2} xs={12} sm={2}>
                    <Category />
                </Grid>

                <Grid container item lg={10} xs={12} sm={10}>   {/* 'item' Child Grid */}
                    <Posts />
                </Grid>
            </Grid>

        </>
    )
}
export default Home;
