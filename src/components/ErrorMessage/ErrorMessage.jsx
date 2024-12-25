import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return (
    <div>
      <p className={s.error}>{children}</p>
    </div>
  );
}
