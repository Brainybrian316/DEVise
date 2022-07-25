import { Card, Grid, Avatar, Container, Box, Typography, Button } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ArrowRightSharp, ArrowLeftSharp, Save, Stars, HeartSharp} from "@mui/icons-material";
import DownloadIcon from '@mui/icons-material/Download'

export default function IdeaBin() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);

  // Basically items = [1, 2, 3, 4]
  const items = useMemo(
    () => [
      "https://picsum.photos/400",
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
          background: "secondary",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Card
          variant="outline"
          sx={{
            width: "50vw",
            height: "auto",
            backgroundColor: "#00b7ff",
            diplay: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItem: "stretch",
            alignContent: "flex-start",
            mx: "auto",
            mt: "2vh",
            boxShadow: "4px 4px rgba(0, 0, 0, 0.25)",
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
                  fontSize: "35px",
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
<Box sx={{
  display: 'flex',
  justifyContent: 'center'
}}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
          width="85vw"
          height="auto"
          flexWrap={"nowrap"}
          margin="2px"

        >
          <Grid item xs="auto">
            <Card
              variant="outlined"
              sx={{
                boxShadow: "4px 4px rgba(0, 0, 0, 0.25)",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                height: "55vh",
                maxWidth: "40vw",
                m: "3vw",
              }}
            >
              <Carousel
                sx={{
                  height: "40vh",
                  width: "40vw",
                  mt: "5vw",
                  ml: "1vw",
                  mr: "1vw",
                  mb: "1vw",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
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
                    textAlign: "center",
                  },
                }}
                indicatorIconButtonProps={{
                  style: {
                    padding: "2px",
                    color: "purple",
                  },
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    backgroundColor: "orange",
                  },
                }}
                NextIcon={<ArrowRightSharp sx={{ color: "secondary.dark" }} />}
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
                boxShadow: "4px 4px rgba(0, 0, 0, 0.25)",
                maxHeight: "55vh",
                maxWidth: "40vw"
              }}
            >
              <Typography
                sx={{
                  maxWidth: "40vw",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Description
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  maxWidth: "45vw",
                  maxHeight: "40vh",
                  fontSize: "13px",
                  m: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a vehicula magna. Donec rhoncus arcu sit amet condimentum
                tristique. In non est mollis, eleifend felis sit amet, mollis
                ex. In hac habitasse platea dictumst. Morbi tempus quis velit
                vitae hendrerit. Morbi laoreet metus eu lacus ornare, nec
                ullamcorper mi vehicula. Suspendisse nec pharetra ex, vitae
                dictum lorem.
              </Typography>
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="space-evenly"
                maxWidth="35vw"
                height="auto"
                margin= "15px"
                
              >
                <Grid item xs="auto">
                  <Button
                  variant='contained'
                  sx= {{
                    maxWidth: '10vw'
                  }}
                  >
                    Save <Save />
                  </Button>
                </Grid>
                <Grid item xs="auto">
                  <Button
                  variant='contained'
                  sx= {{
                    maxWidth: '10vw'
                  }}
                  >
                    Like <Stars />
                  </Button>
                </Grid>
                <Grid item xs="auto">
                  <Button
                  variant='contained'
                  sx= {{
                    maxWidth: '15vw'
                  }}
                  >
                    Download <DownloadIcon />
                  </Button>
                  </Grid>
                  <Grid item xs="auto">
                  <Card sx={{
                    background: 'pink',
                    padding: '4px',
                    display: 'flex',
                    flex: 'nowrap',
                    alignContent: 'center',
                    justifyContent: 'space-around'
                  }}>
                  Likes   <Stars sx={{
                    fontSize: 'medium'
                  }} />   4
                  </Card>
                  </Grid>
      
              </Grid>
            </Card>
          </Grid>
        </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            width="90vw"
            height="auto"
            flexWrap={"nowrap"}
            margin="10px"
          >
            <Grid item xs="auto">
              <Card
                sx={{
                  boxShadow: "4px, 4px, rgba(0, 0, 0, 0.25)",
                  maxHeight: "15vh",
                width: '30vw'
                }}
              >
                <Typography sx={{
                  fontSize: '20px',
                  fontStyle: 'bold'
                }}>
                  About the Author:
                </Typography>
                <Typography sx={{
                  fontSize: '12px'
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a vehicula magna. Donec rhoncus arcu sit amet condimentum
                tristique.
                </Typography>
              </Card>
            </Grid>
           
          </Grid>
        </Box>
      </Container>
    </>
  );
}
