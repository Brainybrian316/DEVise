import { Card, Grid, Avatar, Container, Box, Typography, Button } from "@mui/material";
import {useState, useEffect} from 'react'
import { useGetDevProjectsQuery } from "../../hooks/Queries";


export default function IdeaBin(){


    
const data = useGetDevProjectsQuery();
const devProjects = data.devProjects;
const loading = data.loading;
const error = data.error;
console.log(devProjects);
console.log(error);
console.log(loading);



console.log(devProjects, 'hello')


return(
<Container sx={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
}}>
    {!loading ? <Typography>Loading</Typography> :
{devProjects.map((devProject) => (
<Card key={devProject._id} data-id={devProject._id} sx={{
    maxWidth: '400px',
    height: 'auto',
    background: 'grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
}}
>
    <Typography>
        devProject.Title
    </Typography>
    <Box component='img' src={devProject.mainImage}></Box>
    <Typography>
        devProject.contributors
    </Typography>
</Card>
))}}
</Container>
)
}