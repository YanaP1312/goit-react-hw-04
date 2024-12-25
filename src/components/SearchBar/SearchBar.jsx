import { LuSearch } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageName = form.elements.imageName.value;
    if (imageName.trim() === "") {
      toast("Please enter search term!", {
        position: "top-right",
        style: {
          background: "transparent",
          color: "aliceblue",
          fontStyle: "italic",
          boxShadow: "none",
        },
        icon: "⚠️",
      });
      return;
    }
    onSearch(imageName);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.inputwrap}>
          <button type="submit" className={s.btn}>
            <LuSearch size="16" color="darkBlue" />
          </button>
          <input
            autoComplete="off"
            autoFocus
            name="imageName"
            type="text"
            placeholder="Search images and photos"
            className={s.input}
          />
        </div>
      </form>
      <Toaster />
    </header>
  );
}
