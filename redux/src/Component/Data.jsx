import { useState } from "react";
import React from "react";

export const Data = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://199.241.138.229:8000/image/");
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const downloadImage = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title ; // Assuming image format is JPEG
    link.click();
  };

  return (
    <div className="App">
      <h1>Media Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="data-container">
          {data.map((item) => (
            <div key={item.id} className="media-item">
              <h2>{item.mediaTitle}</h2>
              <p>Date: {item.date}</p>
              <p>Source: {JSON.parse(item.mediaSource)}</p>
              <p>Type: {item.mediaType}</p>
              <p>Keywords: {item.keywords}</p>
              <img src={item.image} alt={item.mediaTitle} />
              <button onClick={() => downloadImage(item.image, item.mediaTitle)}>Download</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
