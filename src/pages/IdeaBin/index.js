import { Card, Grid, Avatar, Container, Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ArrowRightSharp, ArrowLeftSharp } from "@mui/icons-material";
import { fontSize } from "@mui/system";

export default function IdeaBin() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);

  // Basically items = [1, 2, 3, 4]
  const items = useMemo(
    () => [
      "https://picsum.photos/300",
      "https://picsum.photos/305",
      "https://picsum.photos/301",
      "https://picsum.photos/299",
    ],
    []
  );

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <>
      <Container
        sx={{
          backgroundColor: "secondary",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Card
          variant="outline"
          sx={{
            width: "50vw",
            height: "auto",
            backgroundColor: "primary.light",
            diplay: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItem: "stretch",
            alignContent: "flex-start",
            mx: "auto",
            mt: "2vh",
            boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-evenly"
            width="45vw"
          >
            <Grid item xs="auto">
              <Avatar
                sx={{
                  height: "5vw",
                  width: "5vw",
                  m: "5px 5px 5px 5px",
                }}
              >
                E
              </Avatar>
            </Grid>
            <Grid item xs="auto">
              <Typography
                sx={{
                  maxWidth: "30vw",
                  textAlign: "center",
                  mh: "0",
                  fontSize:'35px'
                }}
              >
                Project Title
                <Typography
                  sx={{
                    fontSize: "15px",
                    maxWidth: "30vw",
                    textAlign: "center",
                  }}
                >
                  By: Creator
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Card>
  
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-evenly"
            width="80vw"
            height="auto"
            flexWrap={"nowrap"}
            margin="10px"
          >
            <Grid item xs="auto">
              <Card
                variant="outlined"
                sx={{
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  height: "55vh",
                  maxWidth: '38vw',
                  m: '3vw'
                }}
              >
                <Carousel
                  sx={{
                    height: "45vh",
                    width: "45vw",
                    m: "10px",
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center'

                  }}
                  index={activeChild}
                  autoPlay={false}
                  fullHeightHover={false}
                  navButtonsProps={{
                    style: {
                      backgroundColor: "orange",
                      borderRadius: "5px",
                      height: "4vw",
                      width: "4vw",
                      opacity: "90%",
                    },
                  }}
                  navButtonsWrapperProps={{
                    // Move the buttons to the bottom. Unsetting top here to override default style.
                    style: {
                      bottom: "0",
                      top: "unset",
                    },
                  }}
                  indicatorContainerProps={{
                    style: {
                        marginTop: '50px', 
                        textAlign: 'center', 
                    }
            
                }}
                indicatorIconButtonProps={{
                  style: {
                      padding: '2px',   
                      color: 'purple'      
                  }
              }}
              activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'orange' 
                }
            }}
                  NextIcon={
                    <ArrowRightSharp sx={{ color: "secondary.dark" }} />
                  }
                  PrevIcon={<ArrowLeftSharp sx={{ color: "secondary.dark" }} />}
                >
                  {items.map((i) => {
                    return (
                      <Box
                        component="img"
                        sx={{
                          height: "auto",
                          width: "auto",
                          maxHeight: "40vh",
                          maxWidth: "40vw",
                          ml: "auto",
                          mr: "auto",
                          justifyContent: "center",
                        }}
                        src={i}
                      />
                    );
                  })}
                </Carousel>
              </Card>
            </Grid>
            <Grid item xs="auto">
              <Card
                variant="outlined"
                sx={{
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  height: "55vh",
                  maxWidth: '38vw',
                  mr: '20px'
                }}
              >
                <Typography
                  sx={{
                    maxWidth: "40vw",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  Summary
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    maxWidth: "45vw",
                    maxHeight: "40vh",
                    fontSize: "15px",
                    m: '5px'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a vehicula magna. Donec rhoncus arcu sit amet
                  condimentum tristique. In non est mollis, eleifend felis sit
                  amet, mollis ex. In hac habitasse platea dictumst. Morbi
                  tempus quis velit vitae hendrerit. Morbi laoreet metus eu
                  lacus ornare, nec ullamcorper mi vehicula. Suspendisse nec
                  pharetra ex, vitae dictum lorem.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Card sx={{
            boxShadow: '2px, 2px, rgba(0, 0, 0, 0.5)',
            width: '90vw',
          }}>
            <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-evenly"
            width="90vw"
            height="auto"
            flexWrap={"nowrap"}
            margin="10px"
          >
             <Grid item xs="auto">
          <Typography>
            Hello World
          </Typography>
             </Grid>
             <Grid item xs="auto">
          <Typography>
            More stuff
          </Typography>
            </Grid> 
            </Grid>
          </Card>
        </Box>
      </Container>
    </>
  );
}
