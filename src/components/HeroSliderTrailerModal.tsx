import { useState, useEffect } from "react";
import Modal from "../ui/Modal.jsx";
import tmdbApi from "../api/tmdbApi.js";

const HeroSliderTrailerModal = ({
  movieId,
  modalIsOpen,
  closeTrailerModal,
}) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const xx = async () => {
      const videos = await tmdbApi.getVideos("movie", movieId);
      if (videos.results.length > 0) {
        setVideoSrc("https://www.youtube.com/embed/" + videos.results[0].key);
      }
    };
    xx();
  }, [movieId]);

  const closeModal = () => {
    closeTrailerModal();
  };

  return (
    <Modal isOpen={modalIsOpen} onClose={closeModal}>
      <iframe
        className="w-[900px] h-[500px]"
        title="trailer"
        src={videoSrc}
      ></iframe>
    </Modal>
  );
};

export default HeroSliderTrailerModal;
