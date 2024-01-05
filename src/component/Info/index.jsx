import React from "react";
import { Menpict, Womenpict } from "../../assets";

const Info = () => {
  const styles = {
    shadowElement: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    sacrameto: {
      fontFamily: "Sacramento",
      color: "#f14e95",
    },
  };
  return (
    <div className="grid md:grid-cols-4 gap-4 grid-cols-2 py-5 lg:pb-[50px] md:pb-[70px]" id="info">
      <div className="flex flex-col text-right mt-5">
        <div className="absolute lg:left-[15%] md:left-[10%] sm:left-[15%] left-[8%]">
          <h1 className="text-2xl font-bold" style={styles.sacrameto}>
            Rahma Iqlima Alqudsy
          </h1>
          <h1 className="text-xs">
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing.
          </h1>
          <h1 className="text-xs pt-2">
            Putri dari Bapak, MY <br /> dan <br /> Ibu, NL.
          </h1>
        </div>
      </div>
      <div>
        <img src={Menpict} className="w-[50%] rounded-full md:ml-auto" alt="" />
      </div>
      <div className="pt-8 sm:pt-0">
        <img src={Menpict} className="w-[50%] rounded-full ml-[80px] sm:ml-[100px] md:ml-0" alt="" />
      </div>
      <div className="flex flex-col mt-8 md:mt-5 sm:mt-0">
        <div className="absolute lg:right-[15%] md:right-[7%] sm:right-[15%] right-[8%]">
          <h1 className="text-2xl font-bold" style={styles.sacrameto}>
            Ayman Amin Al-famart
          </h1>
          <h1 className="text-xs">
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing.
          </h1>
          <h1 className="text-xs pt-2">
            Putra dari Bapak, Lorem <br /> dan <br /> Ibu, Ipsum.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
