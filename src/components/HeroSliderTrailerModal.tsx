import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import tmdbApi from "../api/tmdbApi.js";

type Props = {
  movieId: number;
  modalIsOpen: boolean;
  closeTrailerModal: () => void;
};

const HeroSliderTrailerModal: React.FC<Props> = ({
  movieId,
  modalIsOpen,
  closeTrailerModal,
}) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await tmdbApi.getVideos("movie", movieId);
      const videos = response.data;

      if (videos.results.length > 0) {
        setVideoSrc("https://www.youtube.com/embed/" + videos.results[0].key);
      }
    };

    fetchVideos();
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
