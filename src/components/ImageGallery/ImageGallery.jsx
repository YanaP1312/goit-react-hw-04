import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard data={image} />
        </li>
      ))}
    </ul>
  );
}
