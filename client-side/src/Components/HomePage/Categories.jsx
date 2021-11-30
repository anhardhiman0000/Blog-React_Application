import React from 'react';

import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { Link } from "react-router-dom";
import { categories } from '../../Constants/data';




const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#2d48e0',
        color: 'white',
        width: '90%'
    },
    table: {
        border: '2px solid rgba(224, 224,224, 1)',
        //    borderRadius: '10px'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }


})

const Category = () => {
    const classes = useStyles();
    return (
        <>
            <Link to='/createView' className={classes.link} ><Button variant="contained" className={classes.create} >CREATE NEW BLOG</Button></Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {/* <TableRow>
                        <TableCell>Shree Ganesha</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bajrang Bali</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Radhey Krishna</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Shani Deva</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chinmastika Mata</TableCell>
                    </TableRow> */}

                    {
                        categories.map(category => (  //Map function use in order to remove code repetition
                            <TableRow key={category.id}>
                                <TableCell>{category}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    );
}
export default Category
