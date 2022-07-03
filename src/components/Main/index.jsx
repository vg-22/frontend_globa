import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

import { getNewsRequested } from "../../redux/actions/actionCreators";
import NewsCard from "../NewsCard";
import useStyles from "./styles";

const newsArray = [
  {
    id: 1,
    title: "Lizard",
    text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 2,
    title: "NewGloba",
    text: "Какой то текст",
  },
  {
    id: 3,
    title: "NewGloba2",
    text: "какой то текст lalala",
  },
];

function Main() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getNewsRequested());
  }, []);

  const dataNews = newsArray.map(({ title, text, id }) => (
    <NewsCard title={title} key={id} text={text} />
  ));

  return <Box className={classes.container}>{dataNews}</Box>;
}

export default Main;
