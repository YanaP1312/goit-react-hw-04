import Modal from "react-modal";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onRequestClose,
  image,
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
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image modal"
      style={customStyles}

      // overlayClassName="overlay"
      // className="modal"
    >
      <button onClick={handlePrev}>
        <RiArrowLeftWideFill />
      </button>
      <img
        src={images[currentIndex].urls.regular}
        alt={images[currentIndex].description}
      />

      <button onClick={handleNext}>
        <RiArrowRightWideFill />
      </button>
      <p style={{ color: "black" }}>{images[currentIndex].description}</p>
    </Modal>
  );
}
