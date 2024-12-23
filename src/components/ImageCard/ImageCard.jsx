import s from "./ImageCard.module.css";

export default function ImageCard({ data }) {
  return (
    <div className={s.item}>
      <img src={data.urls.small} alt={data.description} />
    </div>
  );
}
