// resultat.js

import React from "react";
import Navbar from "./../Components/Navbar";
import Informationresultat from "./../Components/Informationresultat";
import Footer from "../Components/Footer";

function Resultat() {
  return (
    <div>
    <div className="bg-gris h-screen">
      <Navbar />
      <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
      <div className="mb-4">
        <p className="font-bold text-6xl p-2 ml-6 pb-8 mt-10">
          Votre fichier a bien été déposé
        </p>
      </div>
      <div className=" flex justify-center items-center border border-t-6  bg-blue-light text-center w-[200px] h-[80px] mt-10 p-4 mb-12 rounded-xl">
        Contact.txt
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </div>
    </div>
  );
  
}

export default Resultat;
