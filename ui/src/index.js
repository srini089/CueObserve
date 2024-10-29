import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import 'react-notifications-component/dist/theme.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import 'antd/dist/reset.css';

// layouts
import Admin from "layouts/Admin.js";


ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" component={Admin} />
        <Navigate from="*" to="/" />
      </Routes>
    </HashRouter>,
  document.getElementById("root")
);
