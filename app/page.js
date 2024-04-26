import Image from "next/image";
import Navbar from "./Components/Navbar";
import Information from "./Components/Information";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-gris">
      <div>
        <div>
          <Navbar />
        </div>

        <main className="flex min-h-screen justify-center items-center">
          <div className="w-1/2 h-full">
            <Information />
          </div>
          <div className="relative w-1/2 h-full">
            <div className="w-1/3 h-20 absolute top-0 -translate-y-[70%] rounded-t-2xl bg-blue-light"></div>
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// main className=" flex min-h-screen justify-center items-center ">
// <div className=" w-1/2 h-full"></div>
// <div className=" relative w-1/2 h-full">
//   <div className=" w-1/3 h-20 absolute top-0 -translate-y-[70%] rounded-t-2xl bg-blue-light"></div>
//   <Cart />
// </div>
// </main>}
