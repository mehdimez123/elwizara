"use client"
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Information from "./Components/Information";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

export default function Home() {
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Récupérer le premier fichier sélectionné
    // Traiter le fichier comme vous le souhaitez
    console.log("Fichier sélectionné :", file);
  };

  return (
    <div className="bg-gray-900">
      <div>
        <div>
          <Navbar />
        </div>

        <main className="flex min-h-screen justify-center items-center">
          <div className="w-1/2 h-full">
            <Information />
          </div>
          <div className="relative w-1/2 h-full">
            <div className="w-1/3 h-20 absolute top-0 -translate-y-[70%] rounded-t-2xl bg-gray-600"></div>
            <Cart />
            {/* Bouton "Browse" pour sélectionner un fichier */}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
           
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}