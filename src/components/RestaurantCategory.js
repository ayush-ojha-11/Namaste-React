import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClickOnCategory = () => {
    setShowIndex();
  };
  return (
    <div className="lg:w-6/12 bg-white shadow-lg p-4 mx-auto my-4">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClickOnCategory}
      >
        <span className="text-md font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold text-lg">↓</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
