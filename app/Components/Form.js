import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function Form({ handleSubmit }) {
  const [mail, setMail] = useState("");
  const [nom, setNom] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleChangementMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangementNom = (e) => {
    setNom(e.target.value);
  };

  const handleChangementMotDePasse = (e) => {
    setMotDePasse(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, mail, nom, motDePasse)}>
      <div className="flex flex-col mb-4 relative font-poppins">
        <FontAwesomeIcon
          icon={faEnvelopeCircleCheck}
          className="font-poppins absolute left-3 top-3 text-gray-400"
        />
        <input
          type="email"
          value={mail}
          onChange={handleChangementMail}
          placeholder="E-mail"
          className="font-poppins border border-gray-300 p-2 pl-10 rounded-xl mb-2"
        />
      </div>
      <div className="flex flex-col mb-4 relative font-poppins">
        <FontAwesomeIcon
          icon={faUser}
          className="font-poppins absolute left-3 top-3 text-gray-400"
        />
        <input
          type="text"
          value={nom}
          onChange={handleChangementNom}
          placeholder="Full name"
          className="font-poppins border border-gray-300 p-2 pl-10 rounded-xl mb-2"
        />
      </div>
      <div className="flex flex-col mb-4 relative font-poppins">
        <FontAwesomeIcon
          icon={faLock}
          className="font-poppins absolute left-3 top-3 text-gray-400"
        />
        <input
          type="password"
          value={motDePasse}
          onChange={handleChangementMotDePasse}
          placeholder="Password"
          className="font-poppins border border-gray-300 p-2 pl-10 rounded-xl mb-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 font-poppins rounded-xl"
      >
        Sign up
      </button>
    </form>
  );
}

export default Form;
