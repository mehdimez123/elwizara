import React from "react";
import easy from "../image/Web Accessibility.png";
import Image from "next/image";
import horloge from "../image/Exercise.png";
import herarchie from "../image/maki_rocket.png";
function Information() {
  return (
    <div className="flex flex-col">
      <div className="inline-block">
        <div className="flex justify-center items-center p-10 gap-10">
          <p className=" text-white text-6xl font-bold p-4 pb-10 mt-12 text-center">
            Votre solution de <br />
            classification <br />
            de fichiers automatique
          </p>
        </div>
        <div>
          <p className="ml-10 font-poppins text-2xl p-3 font-poppins-light pb-10 text-center text-white">
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
            <p className="text-xl text-white">Classifiée</p>
          </div>
          <div className="inline-block gap-8 p-2">
            <Image className="w-[120px] h-[120px] text-white " src={horloge} alt="medal" />
            <p className="text-xl text-white">Rapide</p>
          </div>
          <div className="inline-block gap-8 p-2">
            <Image className="w-[120px] h-[120px] text-white" src={easy} alt="medal" />
            <p className="text-xl text-white">Accessible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
