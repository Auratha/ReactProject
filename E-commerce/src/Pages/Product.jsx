import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import star from "../Components/Assets/star_icon.png";
import stardull from "../Components/Assets/star_dull_icon.png";

const Product = ({ cart, handleSetCart, loginActive }) => {
  const select_id = useParams().id;
  const all_product = useContext(ShopContext);
  const select_product = all_product[select_id - 1];
  const { id, name, category, image, new_price, old_price } = select_product;
  const randomReview = Math.floor(Math.random() * 200) + 1;

  const addToCart = () => {
    if (loginActive) {
      if (cart.find((item) => item.id === id)) {
        const index = cart.findIndex((item) => item.id === id);
        cart[index].quantity++;
      } else {
        handleSetCart([...cart, { ...select_product, quantity: 1 }]);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div>
      <p className="my-5 ml-10">
        HOME {">"} SHOP {">"} {category.toUpperCase()} {">"} {name}
      </p>
      <div className="p-10 flex">
        <div className="w-1/2 mx-auto px-20 grid grid-cols-4 grid-rows-4 justify-center items-center gap-3">
          <img src={image} className="row-start-1 shadow-2xl" />
          <img src={image} className="row-start-2 shadow-2xl" />
          <img src={image} className="row-start-3 shadow-2xl" />
          <img src={image} className="row-start-4 shadow-2xl" />
          <img
            src={image}
            className="col-start-2 col-span-12  row-span-full shadow-2xl"
          />
        </div>
        <div className="w-1/2 pr-20">
          <h1 className="font-medium text-3xl ">{name}</h1>
          <div className="mt-2 mb-6 flex items-center space-x-2">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={stardull} alt="star" />
            <p>{`(${randomReview})`}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-4 line-through text-gray-400">${old_price}</p>
            <p className="text-green-700 font-medium">${new_price}</p>
          </div>
          <p className="mt-8 mb-4">
            Elevate your wardrobe with timeless pieces that never go out of
            style! Discover exclusive designs that make you stand out
            effortlessly!
          </p>
          <div className="select-box">
            <p className="">Select Size</p>
            <div className="my-4 flex items-center space-x-4 cursor-pointer">
              <p className="px-4 py-2 border-[0.5px] border-gray-400">S</p>
              <p className="px-4 py-2 border-[0.5px] border-gray-400">M</p>
              <p className="px-4 py-2 border-[0.5px] border-gray-400">L</p>
              <p className="px-4 py-2 border-[0.5px] border-gray-400">XL</p>
              <p className="px-4 py-2 border-[0.5px] border-gray-400">XXL</p>
            </div>
          </div>
          <button
            className="px-6 py-2 mt-2 bg-red-500 text-white"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
