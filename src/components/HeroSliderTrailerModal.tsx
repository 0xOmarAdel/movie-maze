import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import useAxios from "../hooks/useAxios.tsx";
import { VideosType } from "../types/Videos.types.ts";

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

  const { data } = useAxios<VideosType>("movie/" + movieId + "/videos");

  useEffect(() => {
    if (data && data.results.length > 0) {
      setVideoSrc("https://www.youtube.com/embed/" + data.results[0].key);
    }
  }, [data]);

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
