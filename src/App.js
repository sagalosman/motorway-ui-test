import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card.js";
import Contact from "./Contact";


const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <div className="cards-container">
        {images &&
          images.map((img, index) => (
            <Card index={index} img={img} key={img.id} />
          ))}
      </div>
      <Contact />
    </div>
  );
};

export default App;
