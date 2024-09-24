import React, { useRef, useEffect } from "react";
import exclusiveImg from "../Assets/exclusive_image.png";
import gsap from "gsap";

const Offer = () => {
  const offer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              scale: 1,
              duration: 3,
              ease: "power1.out",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(offer.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={offer}
      className="offer w-[80%] px-20 mt-16 mx-auto flex items-center bg-gradient-to-b from-pink-100 to-white scale-0 "
    >
      <div className="offer-left w-1/2">
        <h1 className="text-4xl font-bold leading-normal">
          Exclusive <br /> Offers For You
        </h1>
        <p className="text-sm uppercase">Only on best sellers products</p>
        <button className="offer-btn px-10 py-2 mt-4 text-white bg-red-500 rounded-full">
          Check now
        </button>
      </div>
      <div className="offer-right w-1/2">
        <img
          className="w-[60%] mx-auto"
          src={exclusiveImg}
          alt="exclusiveImg"
        />
      </div>
    </div>
  );
};

export default Offer;
