import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";

// const pages = ["Books", "Add New Book"];

const Header = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#87CEEB" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab LinkComponent={NavLink} to="/" value="one" label="Books" />
        <Tab LinkComponent={NavLink} to="/add" value="two" label="Add Books" />
      </Tabs>
    </Box>
  );
};

export default Header;
