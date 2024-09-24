import React, { useContext, useRef, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import arrow_down from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const ShopCategory = (props) => {
  const location = useLocation();
  console.log(location);
  const all_product = useContext(ShopContext);

  const shopCategory = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      shopCategory.current.children,
      { opacity: 0 },
      { opacity: 1, stagger: 0.5, duration: 3, ease: "power1.out" }
    );
  }, [location]);

  return (
    <div className="w-[90%] mx-auto">
      <img className="mt-4 cursor-pointer" src={props.banner} />
      <div className="my-10 flex justify-between">
        <p>
          <span className="font-medium">Showing 1 - 12</span> out of the
          Products
        </p>
        <div className="px-4 py-2 flex items-center cursor-pointer border-[0.5px] border-gray-300  rounded-full">
          <p>Sort by</p>
          <img className="w-3 ml-2" src={arrow_down} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6" ref={shopCategory}>
        {all_product.map((item) => {
          if (item.category === props.category) {
            return <Item item={item} key={item.id} />;
          }
        })}
      </div>
      <div className="my-20 flex justify-center">
        <button className="px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-200">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
