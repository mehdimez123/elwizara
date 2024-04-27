import React from "react";

function Informationresultat() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-4">
        <p className="font-poppins text-white text-6xl p-2 ml-6 pb-8 mt-10">
          Votre fichier a bien été déposé
        </p>
      </div>
      <div className=" flex justify-center items-center border border-t-6  bg-[#4ECDC4] text-center w-[200px] h-[80px] mt-10 p-4 mb-12 rounded-xl text-2xl font-poppins text-white">
        Contact.txt
      </div>
      <div className="flex flex-col mb-4 p-4 mb-8 mt-10">
        <p className="font-poppins text-white p-4 text-2xl">
          Le chemin vers votre fichier :
        </p>
        <p className="border  bg-black text-white rounded-xl text-center pt-3 w-[300px] h-[50px] ml-4">
          Admin/Département/Contact.txt
        </p>
      </div>
    </div>
  );
}

export default Informationresultat;
