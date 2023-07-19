import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import {
  Home,
  Articles,
  SingleArticle,
  Edit,
  Add,
} from "./screens";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="articles" element={<Articles />}></Route>
      <Route path="articles/:id" element={<SingleArticle />}></Route>
      <Route path="articles/:id/edit" element={<Edit />}></Route>
      <Route path="articles/add" element={<Add />}></Route>
    </Routes>
  )
}