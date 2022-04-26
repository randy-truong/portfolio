import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from "./routes/About";
import Projects from "./routes/Projects";
import Playground from "./routes/Playground";
import Visual from "./routes/Visual";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="visual" element={<Visual />} />
          <Route path="playground" element={<Playground />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>NOTHING EXISTS HERE.</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
