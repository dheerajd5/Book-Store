import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

const url = "http://localhost:5000/books/";

const Book = (props) => {
  const [book, setBook] = useState();

  useEffect(() => {
    if (props.book) setBook(props.book);
  }, [props.book]);

  const deleteBook = async (id) => {
    console.log("Deleted book " + id);
    await axios
      .delete(url + id)
      .then((res) => res.data)
      .then(() => window.location.reload());
  };

  return (
    book && (
      <Card sx={{ width: 300, height: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {book.genre}
          </Typography>
          <Typography variant="body2">
            Written by {book.author}
            <br />
            Review : {book.review}/5
            <br />
            Price : {book.price} Rs
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            LinkComponent={NavLink}
            to={`/book/${book._id}`}
            variant="contained"
            color="secondary"
            size="small"
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteBook(book._id)}
            variant="contained"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    )
  );
};

export default Book;
