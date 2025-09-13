import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/gallery.scss";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const images = galleryRef.current.querySelectorAll(".gallery-image");

    images.forEach((img, index) => {
      gsap.fromTo(
        img,
        { x: 200, opacity: 0 },
        {
          x: 10,
          opacity: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
            toggleActions: "restart reverse restart reverse",
          },
        }
      );

      gsap.to(img, {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: img,
          start: "top 30%",
          end: "top -20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="gallery" ref={galleryRef}>
      <img src="https://lumecube.com/cdn/shop/articles/240215__panelpro2.0_macrophotoshoot_3-1200x800-5b2df79.jpg?v=1727126361" alt="camera" className="gallery-image" />
      <img src="https://boltworldwide.com/wp-content/uploads/2019/05/Post-Production-in-Atlanta.png" alt="Food 2" className="gallery-image" />
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0f/f3/12/0ff3122e-831c-5f08-cfe2-786518823954/AppIcon-1x_U007emarketing-0-5-0-85-220-0.png/512x512bb.jpg" alt="Food 3" className="gallery-image" />
      <img src="https://animost.com/wp-content/uploads/2022/10/How-to-build-a-VFX-studio-6.jpg" alt="Food 4" className="gallery-image" />
      <img src="https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg" alt="Food 5" className="gallery-image" />
    </div>
  );
};

export default Gallery;