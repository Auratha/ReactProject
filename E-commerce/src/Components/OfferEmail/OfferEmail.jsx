import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const OfferEmail = () => {
  const offerEmail = useRef(null);

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

    observer.observe(offerEmail.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={offerEmail}
      className="w-[80%] p-20 mt-20 mx-auto bg-gradient-to-b from-pink-200 to-white flex flex-col items-center scale-0"
    >
      <h1 className="text-5xl">Get Exclusive Offers On Your Email</h1>
      <p className="my-4">Subscribe to our newsletter and stay updated</p>
      <div className="mt-4 relative w-3/5">
        <input
          className="py-2 px-2 w-full border-t-[0.5px] border-b-[0.5px] border-gray-300 outline-none"
          type="email"
          placeholder="Your email"
        />
        <button className="px-6 py-2 bg-black text-white rounded-full absolute -right-5 top-[50%] -translate-y-[50%]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default OfferEmail;
