// import './reset.css';

import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/404";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/404" element={<NotFound/>} />

        <Route path="*" element={<Navigate to="/404" />}/>
      </Routes>
  );
}