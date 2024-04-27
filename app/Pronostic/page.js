"use client";
import React, { useState } from "react";
import Champs from "../Components/Champs";

function Form() {
  const [serviceCount, setServiceCount] = useState(0);
  const [services, setServices] = useState([]);
  const [isSaved, setIsSaved] = useState(false); // State pour indiquer si les informations ont été enregistrées

  const handleServiceCount = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setServiceCount(count);
      setServices(Array.from({ length: count }, () => ({ nom: "", info: "" })));
      setIsSaved(false); // Réinitialiser l'état lorsque le nombre de services change
    }
  };

  const handleNomChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, nom: value } : service
      )
    );
  };

  const handleInfoChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, info: value } : service
      )
    );
  };

  const handleSave = () => {
    // Logique pour enregistrer les informations
    console.log("Informations enregistrées :", services);
    setIsSaved(true); // Mettre à jour l'état pour indiquer que les informations ont été enregistrées
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <p className="text-center text-4xl font-bold font-poppins mb-4">
        Veuillez Remplir votre hérarchie d'entreprise
      </p>
      <p className="text-center text-2xl font-semibold font-poppins mb-4">
        Veuillez indiquer le nombre de services d'entreprise :
      </p>
      <input
        type="number"
        value={serviceCount}
        onChange={handleServiceCount}
        className="border border-gray-300 p-2 rounded bg-blue-light text-black mb-4"
        min="0" // Ajout de la valeur minimale
      />
      <p className="text-center text-2xl font-semibold font-poppins mb-4">
        Veuillez mentionner pour chaque service le nom et le type de document :
      </p>
      {services.map((service, index) => (
        <div key={index} className="flex mb-2">
          <Champs
            nom={service.nom}
            info={service.info}
            handleNomChange={(value) => handleNomChange(index, value)}
            handleInfoChange={(value) => handleInfoChange(index, value)}
          />
        </div>
      ))}
      {!isSaved && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Enregistrer
        </button>
      )}
      {isSaved && <p>Informations enregistrées!</p>}
    </div>
  );
}

export default Form;
