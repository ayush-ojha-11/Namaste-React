import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  function handleAddItem() {}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between space-x-1.5"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="font-semibold">
                {" "}
                - ₹ {item.card.info.price / 100}
              </span>
            </div>

            <p className="text-xs line-clamp-2">{item.card.info.description}</p>
          </div>

          <div className="w-3/12">
            <img src={CDN_URL + item.card.info.imageId} className="w-auto" />
            <button
              className="rounded-lg cursor-pointer bg-amber-200 p-1 mt-1"
              onClick={handleAddItem}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
