import Modal from "react-modal";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { useEffect } from "react";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onRequestClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && currentIndex < images.length) {
        handleNext();
      }
      if (e.key === "ArrowLeft" && images.length > 0) {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isOpen, images]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image modal"
      style={customStyles}

      // overlayClassName="overlay"
      // className="modal"
    >
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        <RiArrowLeftWideFill />
      </button>
      <img
        src={images[currentIndex].urls.regular}
        alt={images[currentIndex].description}
      />

      <button
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        <RiArrowRightWideFill />
      </button>
      <p style={{ color: "black" }}>{images[currentIndex].description}</p>
      <img
        src={images[currentIndex].user.profile_image.medium}
        alt={images[currentIndex].user.username}
      />

      <a href={images[currentIndex].user.portfolio_url} target="_blank">
        {images[currentIndex].user.username}
      </a>
    </Modal>
  );
}
