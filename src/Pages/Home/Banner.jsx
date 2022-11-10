import React from "react";
import img1 from "../../BannerImage/photo-1492684223066-81342ee5ff30.avif";
import img2 from "../../BannerImage/photo-1587271407850-8d438ca9fdf2.avif";
import img3 from "../../BannerImage/photo-1587825140708-dfaf72ae4b04.avif";
import img4 from "../../BannerImage/premium_photo-1665203504385-884cd2b58164.avif";
// this is a carousel like banner
const Banner = () => {
  return (
    <div className="carousel w-full mt-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src={img1} className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="" src={img2} className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img alt="" src={img3} className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img alt="" src={img4} className="w-full rounded-xl" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
