import CategoryCards from "./CategoryCards";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-8/12 mx-auto bg-slate-100 shadow-lg my-4 rounded-md">
      <div onClick={handleClick}>
        <h1 className="font-bold p-4 cursor-pointer">
          {data.title}({data.itemCards.length}){" "}
        </h1>
      </div>
      <div className="shadow-lg">
        {showItems && <CategoryCards item={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
