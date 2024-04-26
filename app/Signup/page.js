"use client";
// Formulaire.jsx
import React from "react";
import Form from "../Components/Form";

function Formulaire() {
  const handleSubmit = (e, mail, nom, motDePasse) => {
    e.preventDefault();
    console.log("Mail:", mail);
    console.log("Nom:", nom);
    console.log("Mot de passe:", motDePasse);
  };

  return (
    <div className="bg-gris h-screen flex justify-center items-center">
      <div className="w-96 h-auto p-8 rounded-lg border-2 border-blue-light">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-poppins mb-2 p-2 flex justify-center items-center">
            Sign up
          </p>
          <p className="text-xl font-poppins mb-2 p-2">
            Veuillez entrer vos informations
          </p>
        </div>
        <Form handleSubmit={handleSubmit} />
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
