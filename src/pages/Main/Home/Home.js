import * as React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ToutContent from "./ToutContent";
import PageHero from "./PageHero";

import '../../../styles.css'
  
export default function Home() {
  return (
      <div>
        <ParallaxProvider>
          <PageHero/>

          <div className="bg-purple w-full">
            <ToutContent
              fullWidth={true}
              textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple"
            />
          </div>
        </ParallaxProvider>
      </div>
  );
}