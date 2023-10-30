import React from "react";
import "./styles.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <div className="App">
      <div className="container border rounded mt-5 pt-3 pb-3">
        <Search defaultCity="seoul" />
      </div>
      <footer className="text-center">
        {" "}
        This project is{" "}
        <a
          href="https://github.com/mina-ghanadi/React-weather-website"
          title="Open Github"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced{" "}
        </a>
        <i className="fa-brands fa-github"></i> and coded by{" "}
        <a
          href="https://fi.linkedin.com/in/mina-ghanadi"
          title="Open LinkedIn page"
          target="_blank"
          rel="noreferrer"
        >
          Mina Ghanadi
        </a>
      </footer>
    </div>
  );
}
