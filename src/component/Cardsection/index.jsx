import React from "react";
import ClockIcon from "../icon/Clock";
import Calendar from "../icon/Calendar";

const Cardsection = () => {
  return (
    <div className="p-8 bg-black text-white">
      <div className="flex flex-wrap justify-center md:flex-row md:-mx-4">
        {/* first card */}
        <div className="max-w-sm md:w-1/2 md:px-4 mb-4">
          <div className="rounded overflow-hidden border-2 border-b-gray-200 shadow-lg">
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl pb-2 border-b-2 text-center border-gray-300">AKAD NIKAH</h1>
              <div className="flex flex-row justify-around py-5 border-b-2 border-gray-200">
                <div className="flex flex-col items-center ">
                  <ClockIcon className="w-5" />
                  <p className="">08.00 - 10.00</p>
                </div>
                <div className="flex items-center flex-col">
                  <Calendar className="w-5" />
                  <p>Sabtu, 30 Juni 2024</p>
                </div>
              </div>
              <div className="px-6 pt-4 text-center">
                <p className="text-xs">Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* second card */}
        <div className="max-w-sm md:w-1/2 md:px-4 mb-4">
          <div className="rounded overflow-hidden border-2 border-b-gray-200 shadow-lg">
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl pb-2 border-b-2 text-center border-gray-300">RESEPSI</h1>
              <div className="flex flex-row justify-around py-5 border-b-2 border-gray-200">
                <div className="flex flex-col items-center ">
                  <ClockIcon className="w-5" />
                  <p className="">11.00 - Selesai</p>
                </div>
                <div className="flex items-center flex-col">
                  <Calendar className="w-5" />
                  <p>Sabtu, 30 Juni 2024</p>
                </div>
              </div>
              <div className="px-6 pt-4 text-center">
                <p className="text-xs">Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
