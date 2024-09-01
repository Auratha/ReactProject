import calculateItemData from "../calculateItemData";
const DisplayItem = ({ onClick }) => {
  return calculateItemData.map((item) => {
    // check in index.css for span-grid and original-grid
    return (
      <div
        key={item}
        onClick={onClick}
        className={item === "=" ? "span-grid" : "original-grid"}
      >
        <p
          className={
            item === "AC" || item === "b"
              ? "text-[#ED0E98] hover:text-white"
              : "text-white"
          }
        >
          {item}
        </p>
      </div>
    );
  });
};

export default DisplayItem;
