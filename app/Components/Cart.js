import React from "react";
import folder from "../image/Folder.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <div className=" bg-blue-light flex flex-col gap-4 font-poppins items-center w-4/5 py-16 rounded-3xl ">
      <Image src={folder} />
      <p className=" text-white font-semibold text-xl">
        Drag and drop your file here
      </p>
      <div className=" flex flex-row gap-2 items-center">
        <div className=" h-px w-10 bg-white"></div>
        <p className=" text-white">or</p>
        <div className=" h-px w-10 bg-white"></div>
      </div>
      <div className=" flex flex-row bg-gris py-3 px-6 gap-6 rounded-2xl">
        <p className=" text-xla ">Browse</p>

        <FontAwesomeIcon className=" h-5 w-5" icon={faDownload} color="#000" />
      </div>
    </div>
  );
}

export default Cart;
