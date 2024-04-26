import React from "react";

function Information() {
  return (
    <div className="flex flex-col">
      <div className="inline-block">
        <div className="flex justify-center items-center p-10 gap-10">
          <p className="font-poppins text-bleu-foncé text-2xl pb-10">
            Votre solution <br />
            de classification <br />
            de fichiers automatique
          </p>
        </div>
        <div className="flex justify-center items-center font-poppins text-2xl p-4 mt-2 mb-10">
          <button className="bg-blue-foncé  rounded  text-2xl w-[100px] h-[80px]">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;

// <div className="inline-block">
// <img className="w-[50px] h-[50px]" src={medaille} alt="medal" />
// <p>Classifiée</p>
// </div>
// <div className="inline-block">
// <img className="w-[50px] h-[50px]" src={medaille} alt="medal" />
// <p>Rapide</p>
// </div>
// <div className="inline-block">
// <img className="w-[50px] h-[50px]" src={medaille} alt="medal" />
// <p>Accessible</p>
// </div>
