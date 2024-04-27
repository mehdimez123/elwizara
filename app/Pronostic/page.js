"use client";

import { React, useState } from "react";
import Champs from "../Components/champs";
function Form() {
  const [entreprise, setEntreprise] = useState("");
  const [serviceCount, setServiceCount] = useState(0);
  const [services, setServices] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleServiceCount = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setServiceCount(count);
      setServices(Array.from({ length: count }, () => ({ nom: "", info: "" })));
      setIsSaved(false);
      checkFormValidity();
    }
  };

  const handleNomChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, nom: value } : service
      )
    );
    checkFormValidity();
  };

  const handleInfoChange = (index, value) => {
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, info: value } : service
      )
    );
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const isValid = services.every((service) => service.nom && service.info);
    setIsFormValid(isValid);
  };

  const printInformations = () => {
    console.log(`Nom de l'entreprise: ${entreprise}`);
    services.forEach((service) => {
      console.log(
        `Nom du service: ${service.nom}, Type de document: ${service.info} de service ${service.nom}`
      );
    });
  };

  const handleSave = async () => {
    if (isFormValid) {
      const form = {
        nom_entreprise: entreprise,
        services: services.map((service) => ({
          nom: service.nom,
          indexes: service.info.split(" "), // Divise le type de document en mots individuels et les utilise comme indexes
        })),
      };

      try {
        const response = await fetch(
          "http://192.168.159.85:5000/createservices",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        if (response.ok) {
          console.log("Requête POST réussie !");
          console.log(form);
          setIsSaved(true);
          setTimeout(() => {
            window.location.href = 'http://localhost:3000';
          }, 1000);
        } else {
          console.error(
            "Erreur lors de la requête POST :",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Erreur lors de la requête POST :", error.message);
      }
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <p className="text-center text-4xl font-bold font-poppins mb-4">
        Veuillez Remplir votre hérarchie d'entreprise
      </p>
      <p className="text-center text-2xl font-semibold font-poppins mb-4">
        Veuillez indiquer le nom de l'entreprise :
      </p>
      <input
        type="text"
        value={entreprise}
        onChange={(e) => setEntreprise(e.target.value)}
        className="border border-gray-300 p-2 rounded bg-blue-light text-black mb-4"
      />
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