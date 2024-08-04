import { useDispatch } from "react-redux";
import { swiggyUrl } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryCards = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center border-b-2 border-gray-300 px-4 pb-4 mx-4"
        >
          <div>
            <h1 className="py-2 font-semibold">{item.card.info.name}</h1>
            <h2>₹{item.card.info.price / 100}</h2>
            <p className="text-sm pt-1 text-pretty">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative">
            <img
              src={swiggyUrl + item.card.info.imageId}
              className="w-20 min-h-16 max-h-20 min-w-24 rounded-md shadow-lg"
            />
            <button
              className="absolute border-0 px-3 rounded-md bg-black bottom-[-0.6rem] left-[1.2rem] cursor-pointer shadow-lg shadow-slate-400 hover:shadow-slate-500  transition-all transform hover:scale-[0.96] duration-200 text-white"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
