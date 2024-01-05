import React, { useState } from "react";
import { Weddingone, Weddingtwo, Weddingthree } from "../../assets";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar
  const galleryImages = [Weddingone, Weddingtwo, Weddingthree, Weddingone];

  // Fungsi untuk membuka lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

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
    <div className="bg-zinc-400 flex justify-center" id="gallery">
      <div className="container mx-auto p-8 ">
        <div className="text-center py-5">
          <span className="mb-3 uppercase tracking-normal">Memori Kisah Kami</span>
          <h2 className="text-7xl mt-2" style={styles.sacrameto}>
            Gallery Foto
          </h2>
          <p className="text-xs mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti inventore tempore illo natus beatae quae et asperiores ipsum. </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Mapping untuk menampilkan gambar */}
          {galleryImages.map((image, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openLightbox(image)}>
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="max-w-3xl w-full p-4 bg-white rounded-lg overflow-hidden">
              <img src={selectedImage} alt="Selected Image" className="w-full h-auto rounded-lg" />
              <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
