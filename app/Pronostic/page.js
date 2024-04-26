"use client";
import React, { useState } from "react";
import Champs from "../Components/Champs";

function Form() {
  const [serviceCount, setServiceCount] = useState(0);
  const [services, setServices] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // State pour indiquer si le formulaire est valide

  const handleServiceCount = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setServiceCount(count);
      setServices(Array.from({ length: count }, () => ({ nom: "", info: "" })));
      setIsSaved(false);
    }
  };

  const handleNomChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, nom: value } : service
      )
    );
    checkFormValidity(); // Vérifier la validité du formulaire après chaque modification
  };

  const handleInfoChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, info: value } : service
      )
    );
    checkFormValidity(); // Vérifier la validité du formulaire après chaque modification
  };

  const checkFormValidity = () => {
    // Vérifier si tous les champs sont remplis
    const isValid = services.every((service) => service.nom && service.info);
    setIsFormValid(isValid);
  };

  const handleSave = () => {
    // Enregistrer les informations uniquement si le formulaire est valide
    if (isFormValid) {
      console.log("Informations enregistrées :", services);
      setIsSaved(true);
    }
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
        min="0"
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
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isFormValid ? "" : "opacity-50 cursor-not-allowed"
          }`} // Désactiver le bouton si le formulaire n'est pas valide
          onClick={handleSave}
          disabled={!isFormValid} // Désactiver le bouton si le formulaire n'est pas valide
        >
          Enregistrer
        </button>
      )}
      {isSaved && <p>Informations enregistrées!</p>}
    </div>
  );
}

export default Form;
