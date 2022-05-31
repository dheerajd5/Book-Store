import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

//This is something for exp only
const randF = () => {
  console.log("Just a random function");
};

const BookDetail = (props) => {
  const id = useParams().id;
  const history = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    author: "",
    review: "",
    price: "",
    genre: "",
  });

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        review: String(inputs.review),
        genre: String(inputs.genre),
        price: Number(inputs.price),
      })
      .then((res) => res.data);
  };

  const sendUpdate = async () => {
    return await axios.put("http://localhost:5000/books/" + id, {
      name: String(inputs.name),
      author: String(inputs.author),
      review: String(inputs.review),
      genre: String(inputs.genre),
      price: Number(inputs.price),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) sendRequest().then(() => history("/"));
    else sendUpdate().then(() => history("/"));
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!id) return;
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setInput(data.book);
        });
    };
    fetchHandler();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          "& > :not(style)": { m: 1, width: "70vw" },
        }}
      >
        <TextField
          onChange={handleChange}
          id="name"
          label="Name"
          value={inputs.name}
        />
        <TextField
          onChange={handleChange}
          id="author"
          label="Author"
          value={inputs.author}
        />
        <TextField
          onChange={handleChange}
          id="review"
          label="Review"
          value={inputs.review}
        />
        <TextField
          onChange={handleChange}
          id="genre"
          label="Genre"
          value={inputs.genre}
        />
        <TextField
          id="price"
          label="Price"
          value={inputs.price}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  );
};

export default BookDetail;

// Second change i have added here
<<<<<<< HEAD

//Litte something for the master branch
=======
//Second Hunk baby
const randA = () => {
  console.log("Just a random function");
};
>>>>>>> exp
