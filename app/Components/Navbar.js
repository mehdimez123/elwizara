import React from "react";

function Navbar() {
  return (
    <nav className="mt-8">
      <div className="font-poppins text-bleu-foncé text-2xl font-bold cursor-pointer inline-flex gap-8">
        <p>Home</p>
        <p>FAQ</p>
        <p>Api</p>
        <p>Qualification</p>
      </div>
    </nav>
  );
}

export default Navbar;
