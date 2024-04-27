"use client";
import React from "react";

function Champs({ info, nom, handleInfoChange, handleNomChange }) {
  return (
    <div className="flex flex-row items-center">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Nom du service"
          value={nom}
          onChange={(e) => handleNomChange(e.target.value)}
          className="border border-gray-700 p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Type de document"
          value={info}
          onChange={(e) => handleInfoChange(e.target.value)}
          className="border border-gray-700 p-2 rounded "
        />
      </div>
    </div>
  );
}

export default Champs;