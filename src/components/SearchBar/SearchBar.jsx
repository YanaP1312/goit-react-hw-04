import { LuSearch } from "react-icons/lu";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageName = form.elements.imageName.value;
    if (imageName.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(imageName);
    form.reset();
  };

  return (
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
  );
}
