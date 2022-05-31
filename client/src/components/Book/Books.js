import { React, useState, useEffect } from "react";
import Book from "./Book";
import Grid from "@mui/material/Grid";

import axios from "axios";

const url = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};

const Books = (props) => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <Grid container spacing={3} margin={1}>
      {books &&
        books.map((book, id) => {
          return (
            <Grid item key={id}>
              <Book book={book} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Books;

// Something is added here as a comment
