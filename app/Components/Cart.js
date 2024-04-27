"use client"
import React, { useState } from "react";
import folder from "../image/Folder.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const [file, setFile] = useState("");
  const [fileEnter, setFileEnter] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setFileEnter(true);
  };

  const onDragLeave = (e) => {
    setFileEnter(false);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    setFileEnter(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setFileEnter(false);
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`items file[${i}].name = ${file?.name}`);
        }
      });
    }
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Récupérer le premier fichier sélectionné
    // Traiter le fichier comme vous le souhaitez
    console.log("Fichier sélectionné :", file);
  };
  return (
    <div className="bg-gray-700 flex flex-col gap-4 font-poppins items-center w-4/5 py-16 rounded-3xl"  onDrop={onDrop}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd}
    onDragLeave={onDragLeave}>
      {/* Input masqué visuellement */}
      <input
        className="hidden"
        type="file"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
      />
      
      {/* Reste de votre contenu */}
      <Image src={folder} />
      <p className="text-white font-semibold text-xl">
        Drag and drop your file here
      </p>
      <div className="flex flex-row gap-2 items-center">
        <div className="h-px w-10 bg-white"></div>
        <p className="text-white">or</p>
        <div className="h-px w-10 bg-white"></div>
      </div>
      <div className="flex flex-row bg-gris py-3 px-6 gap-6 rounded-2xl">
        {/* Bouton "Browse" pour sélectionner un fichier */}
        <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
        <button className="text-xla text-black font-bold" onClick={() => document.getElementById("fileInput").click()}>Browse</button>
        <FontAwesomeIcon className="h-5 w-5" icon={faDownload} color="#000" />
      </div>
    </div>
  );
}

export default Cart;