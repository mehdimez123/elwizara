import Image from "next/image";
import Navbar from "../Components/Navbar";
import "../style.css";
import Titre from "../Components/Titre";
import Start from "../Components/Start";
import Text_page1 from "../Components/Texte_page1"

export default function Home() {
  return (
    <>
      <div class="whole_page">
        <div className="white_nav">
        <nav>
      <div className="font-poppins-light text-black text-2xl  cursor-pointer text-2xl gap-8 p-6 pl-12 flex justify-center items-center">
        <p>Home</p>
        <p>Formulaire</p>
        <p>Contact us</p>
        <p></p>
      </div>
    </nav>
        <div className="white_part">
        <Titre/>
        <Start/>
        </div>
        </div>
        <div className="blue_part">
            <Text_page1/>
            <div className="photo">
        <Image  src="/images/image.png" alt="photo" width={500} height={500}/>
        </div>
        </div>
        
      </div>
    </>
   

  );
}
