import React from "react";

function Informationresultaterreur() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4">
        <p className="font-poppins text-[#FF0000]  text-6xl p-2 ml-6 pb-8 mt-10">
          Votre fichier n'as pas été traitée correctement
        </p>
      </div>
      <div className=" flex justify-center items-center border border-t-6  bg-[#FF0000] text-center w-[200px] h-[80px] mt-10 p-4 mb-12 rounded-xl text-2xl font-poppins text-white">
        Contact.txt
      </div>
      <div className="flex flex-col mb-4 p-4 mb-8 mt-10">
        <p className="font-poppins text-white p-4 text-2xl">
          Le classificateur assisté a eu du mal à traiter le document veuillez
          vérifier que: <br />
          <br />
          -Votre document à été atteint d'une erreur lors de la sauvegarde{" "}
          <br />
          <br />
          -L'usage de logiciels de conversionsmalveillants Accidents physiques
        </p>
      </div>
    </div>
  );
}

export default Informationresultaterreur;
