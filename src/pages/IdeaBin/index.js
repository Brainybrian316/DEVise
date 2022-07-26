import {
  Card,
  Grid,
  Avatar,
  Container,
  Box,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  ArrowRightSharp,
  ArrowLeftSharp,
  Save,
  Stars,
} from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import { useGetOneDevProjectQuery } from "../../hooks/Queries";
import "./title.css";
import { bgcolor } from "@mui/system";

export default function IdeaBin() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);
  const [items, setItems] = useState([]);
  const [getDevProject, setDevProject] = useState({});
  const [authors, setAuthors] = useState([]);
  const [videos, setVideos] = useState([]);

  const { devProject } = useGetOneDevProjectQuery("62dec549ceb5842aeaeeac32");

  useEffect(() => {
    if (devProject) {
      setItems(devProject.images);
      setAuthors(devProject.authors);
      setVideos(devProject.videos);
      setDevProject(devProject);
    }
  });

  // Basically items = [1, 2, 3, 4]

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
            justifyContent="space-around"
            width="45vw"
          >
            <Grid item xs="auto">
              {authors.map((author) => (
                <Avatar
                  key={author}
                  className="avatar"
                  sx={{
                    height: "5vw",
                    width: "5vw",
                    m: "5px 5px 5px 5px",
                    textShadow: ".1em .1em 0 hsl(200 50% 30%)",
                    bgcolor: "#d084df",
                    fontSize: "2vw",
                  }}
                >
                  {author.charAt(1)}
                </Avatar>
              ))}
            </Grid>
            <Grid item xs="auto">
              <Typography
                className="title"
                sx={{
                  maxWidth: "35vw",
                  textAlign: "center",
                  mh: "0",
                  fontSize: "2.5vw",
                }}
              >
                {getDevProject.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5vw",
                  maxWidth: "30vw",
                  textAlign: "center",
                  textShadow: ".1em .1em 0 hsl(200 50% 30%)",
                  color: "white",
                }}
              >
                By: {authors.map((author) => `${author} `)}
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                  maxHeight: "60vh",
                  minHeight: "45vh",
                  width: "40vw",
                  m: "3vw",
                  background: "linear-gradient(90deg, #b9deed, #efefef)",
                }}
              >
                <Carousel
                  sx={{
                    maxHeight: "40vh",
                    width: "40vw",
                    mt: "5vw",
                    ml: "1vw",
                    mr: "1vw",
                    mb: "1vw",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "flex-start",
                  }}
                  index={activeChild}
                  autoPlay={false}
                  fullHeightHover={false}
                  navButtonsProps={{
                    style: {
                      backgroundColor: "#eb9999",
                      borderRadius: "5px",
                      height: "2vw",
                      width: "4vw",
                      opacity: "90%",
                      borderRadius: "10px",
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
                      backgroundColor: "#eb9999",
                    },
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
                          maxHeight: "40vh",
                          maxWidth: "40vw",
                          ml: "auto",
                          mr: "auto",
                          justifyContent: "center",
                          pb: "25px",
                        }}
                        src={i}
                      />
                    );
                  })}
                </Carousel>
              </Card>
            </Grid>
            <Grid item xs="auto">
              {videos.length ? null : <Card
                variant="outlined"
                sx={{
                  boxShadow: "4px 4px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "40vh",
                  minHeight: "30vh",
                  width: "35vw",
                  m: "3vw",
                  background: "linear-gradient(90deg, #b9deed, #efefef)"
                }}
              >
                <Carousel
                  sx={{
                    maxHeight: "40vh",
                    width: "30vw",
                    mt: "5vw",
                    ml: "1vw",
                    mr: "1vw",
                    mb: "1vw",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "flex-start",
                  }}
                  index={activeChild}
                  autoPlay={false}
                  fullHeightHover={false}
                  navButtonsProps={{
                    style: {
                      backgroundColor: "#eb9999",
                      borderRadius: "5px",
                      height: "2vw",
                      width: "4vw",
                      opacity: "90%",
                      borderRadius: "10px",
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
                      backgroundColor: "#eb9999",
                    },
                  }}
                  NextIcon={
                    <ArrowRightSharp sx={{ color: "secondary.dark" }} />
                  }
                  PrevIcon={<ArrowLeftSharp sx={{ color: "secondary.dark" }} />}
                >
                  {videos.map((i) => {
                    return (
                      <CardMedia
                        component="video"
                        autoPlay
                        sx={{
                          maxHeight: "30vh",
                          maxWidth: "30vw",
                          ml: "auto",
                          mr: "auto",
                          justifyContent: "center",
                          pb: "25px",
                        }}
                        src={"i"}
                      />
                    );
                  })}
                </Carousel>
              </Card> }
              <Card
                className="description"
                variant="outlined"
                sx={{
                  boxShadow: "4px 4px rgba(0, 0, 0, 0.25)",
                  maxHeight: "55vh",
                  maxWidth: "40vw",
                  background: "linear-gradient(90deg, #b9deed, #efefef)",
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
                  {getDevProject.description}
                </Typography>
                <Grid
                  container
                  spacing={3}
                  alignItems="center"
                  justifyContent="space-evenly"
                  maxWidth="35vw"
                  height="auto"
                  margin="15px"
                >
                  <Grid item xs="auto">
                    <Button
                      variant="contained"
                      sx={{
                        maxWidth: "10vw",
                      }}
                    >
                      Save <Save />
                    </Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button
                      variant="contained"
                      sx={{
                        maxWidth: "10vw",
                      }}
                    >
                      Like <Stars />
                    </Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button
                      variant="contained"
                      sx={{
                        maxWidth: "15vw",
                      }}
                    >
                      Download <DownloadIcon />
                    </Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Card
                      sx={{
                        height: "35px",
                        width: "100px",
                        background: "purple",
                        padding: "4px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          color: "white",
                        }}
                      >
                        Likes{" "}
                        <Stars
                          sx={{
                            fontSize: "medium",
                          }}
                        />{" "}
                        4
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
