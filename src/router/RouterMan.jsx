import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Nav_bar } from '../assets/components/Nav_bar';
import { Foot_er } from '../assets/components/Foot_er';
import { NoWayFound } from '../views/NoWayFound';
import { Home } from '../views/Home';
import { About } from '../views/About';
import { Grid } from '../views/Grid';
import { Contact } from '../views/Contact';
import { Player } from '../assets/components/Player';

export const RouterMan = () => {
  return (
          <BrowserRouter>
            <Nav_bar />
            <Player />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/index" element={<Home />} />
              <Route path="/acerca" element={<About />} />
              <Route path="/programacion" element={<Grid />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<NoWayFound />} />
            </Routes>
            <Foot_er />
          </BrowserRouter>
  )
}
