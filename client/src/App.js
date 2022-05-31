import Header from "./components/Header";
import Books from "./components/Book/Books";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import React from "react";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="xl" className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Books />} exact />
            <Route path="/add" element={<BookDetail />} exact />
            <Route path="/book/:id" element={<BookDetail />} exact />
            {/* <Route path="/view" element={<BookDetail />} exact /> */}
          </Routes>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
