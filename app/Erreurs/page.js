// resultat.js

import React from "react";
import Navbar from "./../Components/Navbar";
import Informationresultat from "./../Components/Informationresultat";
import Footer from "../Components/Footer";
import Informationresultaterreur from "../Components/Infoerreur";

function Resultat() {
  return (
    <div className="bg-[#292F36] h-screen">
      <Navbar />
      <div className="flex flex-col">
        <Informationresultaterreur />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Resultat;
