import { Container } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import React from 'react';
// import './aboutUs.css';
import Developers from './Developer';

export default function AboutUs() {
  return (
    <>
      <Container
        align="center"
        style={{
          marginTop: '50px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h3">Devise: A Developer Collaboration Platform</Typography>
        <Typography variant="body1">
          DEVise was founded on a simple principle: To facilitate the genesis of inspiration <br />
          Are there other tools and platforms out there? Yes, there are. Are any of them what we
          offer? No.
        </Typography>
        </Container>

      <Container style={{backgroundColor: '#f5f5f5',}}
      >
        <Typography
         variant="h6">What We Are</Typography>
        <Typography style={{align: 'left',}} variant="body1">
          Here you will find a community of developers who are passionate about their craft, and who
          are willing to share their knowledge and skills.
          <br />
          There is no limit to the number of people who can join the DEVise community, and there is
          no limit to the number of projects that can be created. <br />
          Here you will find resources for inspiration, and for learning how to create a project.{' '}
          <br />
          You will find other projects who are looking for collaborators or partners more than
          someone to just take up one issue on their massive ToDo lists. <br />
          If you have a project you are looking to share or develop with others, you can find the
          resources and people here. <br />
          </Typography>
          <Typography
           variant="h6">
            What We Are Not
           </Typography>
           <Typography>
          We are not facebook, although there is a strong social aspect to this community we
          professionals, students, teachers. <br />
          We are not GitHub, this is not a version control system or a code repository. It is a
          collaborative open source exchange. <br />
          We are not Fiverr, we did not start this community to become another freelance job board
          platform. We are not a company, we are a community. <br />
        </Typography>
        <Typography 
        variant="h6">Why We Are</Typography>
        <Typography variant="body1">
          We founded DEVise to have an all-in-one platform for anyone who is looking for
          inspiration, help, or looking to collaborate on another project. <br />
          Inspiration should be easier to find. <br />
        </Typography>
      </Container>
      <Developers />
    </>
  );
}
