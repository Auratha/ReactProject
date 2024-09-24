import React, { useRef, useEffect } from "react";
import Item from "../Item/Item";
import newCollectionData from "../Assets/new_collections.js";
import gsap from "gsap";

const NewCollection = () => {
  const newCollection = useRef(null);

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

            gsap.to(".new-collection-title, .new-collection-line", {
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

    observer.observe(newCollection.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <h1 className="new-collection-title mt-16 opacity-0 ">New Collection</h1>
      <div className="new-collection-line opacity-0"></div>
      <div
        className="w-[90%] mx-auto px-12 grid grid-cols-4 gap-6"
        ref={newCollection}
      >
        {newCollectionData.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
