import React from "react";
import Link from 'next/link';

function Navbar() {
  return (
        <nav>
        <div className="font-poppins-light text-white text-base cursor-pointer text-2xl gap-20 p-6 pl-12 flex justify-center items-center ">
        <Link href="../Landingpage">Home</Link>
        <Link  href="../Pronostic>">Formulaire</Link>
        <Link  href="../Landingpage">Commencer</Link>
      </div>
    </nav>
  );
}

export default Navbar;
