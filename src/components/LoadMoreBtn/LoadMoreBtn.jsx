export default function LoadMoreBtn({ page, setPage }) {
  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Load more</button>
    </div>
  );
}
