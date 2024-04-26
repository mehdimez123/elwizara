import Image from "next/image";
import Navbar from "../Components/Navbar";
import "../style.css";
import Titre from "../Components/Titre";
import Start from "../Components/Start";
import Text_page1 from "../Components/Texte_page1"

export default function Home() {
  return (
    <>
      <div>
        <div className="white_nav">
        <Navbar/>
        <div className="white_part">
        <Titre/>
        <Start/>
        </div>
        </div>
        <div className="blue_part">
            <Text_page1/>
            <Image src="/images/image.png" alt="photo" width={300} height={300}/>
        </div>
      </div>
    </>
   

  );
}
