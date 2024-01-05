import React from "react";

const Alamat = () => {
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
    <div className="p-8 bg-black text-center " id="info">
      <div className="flex flex-col justify-center mt-5">
        <div className="judul md:text-7xl text-5xl mb-3" style={styles.sacrameto}>
          Informasi Acara
        </div>
        <div className="alamat text-white py-2">
          <h4 className="md:text-2xs text-xs">
            Alamat : Hotel Tentrem Semarang <br /> Jl. Gajahmada No.123, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134.
          </h4>
        </div>
        <div className="flex flex-col items-center py-2">
          <a href="https://maps.app.goo.gl/FuyB8EfaFpE9yLxX9" target="_blank">
            <button className="md:px-5 py-2 md:w-[200px] w-[100px]  text-xs">buka peta</button>
          </a>

          <p className="text-white py-2 w-[400px] md:w-[500px] md:text-2xs text-xs">
            Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkannya pernikahan, boleh jadi anda salah jadwal, atau salah tempat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alamat;
