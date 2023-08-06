import React, { useState } from "react";
import Dropzone from "react-dropzone";
import html2canvas from "html2canvas";

const ImageEditor = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [editedImage, setEditedImage] = useState(null);
  const [collagePosition, setCollagePosition] = useState({ x: 0, y: 0 });

  const handleImageDrop = (acceptedFiles) => {
    if (imageFiles.length >= 2) {
      alert("You can only add two images for collage.");
      return;
    }

    const file = acceptedFiles[0];
    setImageFiles((prevImageFiles) => [...prevImageFiles, file]);
    setEditedImage(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImageFiles((prevImageFiles) =>
          prevImageFiles.map((item) => (item === file ? img : item))
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleResize = () => {
    if (imageFiles.length !== 2) {
      alert("Please add two images for collage.");
      return;
    }

    const [imageElement1, imageElement2] = imageFiles;
    const canvas = document.createElement("canvas");
    canvas.width = imageElement1.width + 100; // Adjust width as needed
    canvas.height = imageElement1.height + 100; // Adjust height as needed

    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageElement1, 0, 0, imageElement1.width, imageElement1.height);
    ctx.drawImage(
      imageElement2,
      collagePosition.x,
      collagePosition.y,
      imageElement2.width,
      imageElement2.height
    );

    setEditedImage(canvas.toDataURL());
  };

  const handleCollageDragStart = (event) => {
    event.dataTransfer.setData("text/plain", ""); // Necessary for Firefox drag-and-drop
  };

  const handleCollageDrag = (event) => {
    event.preventDefault();
    setCollagePosition({ x: event.clientX, y: event.clientY });
  };

  const handleDownload = () => {
    if (!editedImage) return;
    const link = document.createElement("a");
    link.download = "edited_image.png";
    link.href = editedImage;
    link.click();
  };

  return (
    <div>
      <h1>Image Collage Editor</h1>
      <Dropzone onDrop={handleImageDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: "2px dashed black", padding: "20px" }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop an image here, or click to select an image.</p>
          </div>
        )}
      </Dropzone>

      {imageFiles.map((imageElement, index) => (
        <div key={index}>
          <img
            src={imageElement.src}
            alt={`Uploaded ${index + 1}`}
            style={{ maxWidth: "300px" }}
            draggable={index === 1} 
            onDragStart={handleCollageDragStart}
            onDrag={handleCollageDrag}
          />
        </div>
      ))}

      {imageFiles.length === 2 && (
        <div>
          <button onClick={handleResize}>Create Collage</button>
        </div>
      )}

      {editedImage && (
        <div>
          <img src={editedImage} alt="Collage" />
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
