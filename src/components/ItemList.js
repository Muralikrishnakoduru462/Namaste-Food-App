import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2  border-gray-300 border-b-2 text-left flex justify-between">
        <div className="w-3/12">
          <img src={CDN_URL + item.card.info.imageId} className="w-full" /></div>
        <button className="p-2 bg-white shadow-lg absolute m-auto" onClick={() => handleAddItem(item)}>Add +</button>
        <div>
          <div className="w-9/12 p-4">
            <div className="py-2"><span>{item.card.info.name}</span>
              <span> - Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <span className="text-xs">{item.card.info.description}</span>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default ItemList;