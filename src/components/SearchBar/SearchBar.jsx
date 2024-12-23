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
        style: { background: "rgb(77, 77, 232)", color: "aliceblue" },
        icon: "⚠️",
      });
      return;
    }
    onSearch(imageName);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <LuSearch />
        </button>
        <input
          autoComplete="off"
          autoFocus
          name="imageName"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
}
