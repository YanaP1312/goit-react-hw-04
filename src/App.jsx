import { useEffect, useState } from "react";
import { fetchImagesWithPhoto } from "./components/images-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = async (imageName) => {
    setSearchQuery(imageName);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithPhoto(searchQuery, page);
        if (data.results.length === 0) {
          setNoResults(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...data.results]);

        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image, index) => {
    setModalIsOpen(true);

    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalIsOpen(false);

    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {noResults && "No photos found matching your request"}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          images={images}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}
