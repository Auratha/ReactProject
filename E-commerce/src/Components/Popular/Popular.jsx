import React, { useRef, useEffect } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import womenData from "../Assets/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Popular = () => {
  const popular = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.children, {
              opacity: 1,
              duration: 3,
              ease: "power1.out",
              stagger: {
                amount: 1.5,
                from: "left",
              },
            });

            gsap.to(".popular-title, .popular-line", {
              opacity: 1,
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

    observer.observe(popular.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1 className="popular-title mt-16 opacity-0">POPULAR IN WOMEN</h1>
      <div className="popular-line opacity-0"></div>
      <div className="item-container" ref={popular}>
        {womenData.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
