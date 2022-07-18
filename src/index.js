import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./home.js";
import Userlist from "./userlist.jsx";
import './index.css';
import Header from "./header.jsx";
import Footer from './footer.jsx';
import Week1 from "./week1.jsx";
import Week2 from "./week2.jsx";
import Week3 from "./week3.jsx";
import Toggle from './toggle.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/week1" element={<Week1 />} />
      <Route path="/week2" element={<Week2 />} />
      <Route path="/week3" element={<Week3 />} />
      <Route path="/redux" element={<Userlist />} />
      <Route path="/toggle" element={<Toggle />} />
     
    </Routes>
  </BrowserRouter>
  <Footer />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
