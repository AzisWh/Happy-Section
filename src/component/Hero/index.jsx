import React, { useState, useEffect } from "react";
import { Menpict, Womenpict, Background } from "../../assets";

const Hero = () => {
  const styles = {
    shadowElement: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    sacrameto: {
      fontFamily: "Sacramento",
      color: "#f14e95",
    },
  };

  // Tanggal target
  const weddingDate = new Date("June 30, 2024 00:00:00").getTime();

  // State untuk menyimpan waktu mundur
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Setup interval untuk memperbarui waktu setiap detik
  let timerInterval;

  // Fungsi untuk menghitung waktu mundur
  const calculateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = weddingDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      // Jika waktu telah lewat, berhenti memperbarui waktu
      clearInterval(timerInterval);
    }
  };

  // Memanggil fungsi pertama kali komponen dimount dan setiap kali countdown berubah
  useEffect(() => {
    calculateCountdown();

    // Setup interval untuk memperbarui waktu setiap detik
    timerInterval = setInterval(calculateCountdown, 1000);

    // Membersihkan interval saat komponen dilepas
    return () => {
      clearInterval(timerInterval);
    };
  }, [countdown]);

  return (
    <div className="w-full h-screen bg-cover bg-center relative p-7 " style={{ backgroundImage: `url(${Background})`, color: "#fff" }} id="hero">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center" style={styles.shadowElement}>
        <h1 className="md:text-3md text-2sm mb-4">Kepada Bapak/Ibu/Saudara/i,</h1>
        <h1 className="name md:text-8xl text-5xl whitespace-nowrap font-bold mb-4" style={styles.sacrameto}>
          Rahma & Ayman
        </h1>
        <p className="text-sm md:text-xl drop-shadow">Akan melangsungkan resepsi pernikahan dalam:</p>
        <div className="text-center mt-4">
          <div className="flex justify-center items-center space-x-4">
            <div>
              <p className="text-xl font-bold">{countdown.days}</p>
              <p className="text-sm">Hari</p>
            </div>
            <div>
              <p className="text-xl font-bold">{countdown.hours}</p>
              <p className="text-sm">Jam</p>
            </div>
            <div>
              <p className="text-xl font-bold">{countdown.minutes}</p>
              <p className="text-sm">Menit</p>
            </div>
            <div>
              <p className="text-xl font-bold">{countdown.seconds}</p>
              <p className="text-sm">Detik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
