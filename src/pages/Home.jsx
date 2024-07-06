import React from "react";
import Item from "../Components/Item";
import HomePageMenu from "../Data/HomePageMenu";

const Home = () => {
  return (
    <>
      <div className="container-lg container-fluid mt-4">
        <div className="menuList">
          {HomePageMenu.map((item, i) => {
            return (
              <a
                href={item.link}
                target="_self"
                className="text-decoration-none"
              >
                <Item
                  key={i}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
