import React from "react";

function Informationresultat() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4">
        <p className="font-bold text-6xl p-2 ml-6 pb-8 mt-10 text-red-600">
          Votre fichier a bien été déposé
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="flex justify-center items-center border border-t-6 bg-blue-light text-center w-[200px] h-[80px] mt-10 p-4 mb-4 rounded-xl bg-red-600">
          <span className="text-white">Contact.txt</span>
        </div>
        <p className="mb-4">Le classificateur assisté a eu du mal à traiter le document veuillez vérifier :</p>
      </div>
    </div>
  );
}

export default Informationresultat;