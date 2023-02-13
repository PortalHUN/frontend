import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Register from './Pages/Auth/Register/Register';
import Login from './Pages/Auth/Login/Login';

import Layout from './Layout/Layout';
import Home from './Pages/General/Home/Home';
import About from './Pages/General/About/About';
import Missing from './Pages/General/Missing/Missing';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/auth/" element={<Layout/>}>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
