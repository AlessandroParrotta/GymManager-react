import * as React from "react";

import { Routes, Route } from 'react-router-dom';
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Home from './Home/Home'
import Login from './Login/Login';
  
export default function Main() {
  return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
  );
}