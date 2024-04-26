import React from "react";
import horloge from "../image/horloge.png";
import Image from "next/image";
import herarchie from "../image/herarchie.png";
import easy from "../image/easy.png";
function Information() {
  return (
    <div className="flex flex-col">
      <div className="inline-block">
        <div className="flex justify-center items-center p-10 gap-10">
          <p className=" text-blue-dark text-6xl font-bold p-4 pb-10 mt-12 text-center">
            Votre solution de <br />
            classification <br />
            de fichiers automatique
          </p>
        </div>
<<<<<<< HEAD
        <div className="flex justify-center items-center font-poppins text-2xl p-4 mt-2 mb-10">
=======
        <div>
          <p className="ml-10 font-poppins text-2xl p-3 font-poppins-light pb-10 text-center">
            Deposer vos documents
            <br />
            administratifs et classifier <br /> les dans vos dossier de facon{" "}
            <br />
            automatique
          </p>
        </div>
        <div className="flex justify-center items-center ml-14 p-2">
          <div className="inline-block gap-8">
            <Image
              className="w-[120px] h-[120px]"
              src={herarchie}
              alt="medal"
            />
            <p className="text-xl">Classifiée</p>
          </div>
          <div className="inline-block gap-8 p-2">
            <Image className="w-[120px] h-[120px]" src={horloge} alt="medal" />
            <p className="text-xl ">Rapide</p>
          </div>
          <div className="inline-block gap-8 p-2">
            <Image className="w-[120px] h-[120px]" src={easy} alt="medal" />
            <p className="text-xl ">Accessible</p>
          </div>
>>>>>>> mehdi
        </div>
      </div>
    </div>
  );
}

export default Information;
