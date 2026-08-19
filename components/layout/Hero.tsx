"use client";
import Link from "next/link";
import { useState } from "react";
import "./Hero.css";


// Badha video paths ek array ma
const videos = [
  "/video/15561210_1920_1080_25fps.mp4",
  "/video/istockphoto-1222931034-640_adpp_is.mp4",
  "/video/istockphoto-1389826341-640_adpp_is.mp4",
  
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero">
      <video
        key={currentVideo}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="hero-overlay">
  
  <h1>We Offer Solutions To Meet Your Energy Needs.</h1>
  <br></br>
  
  <Link href="/about" className="btn btn-primary">About Us</Link>
</div>

      {/* Carousel arrows - have functional 6 */}
      <button className="arrow arrow-left" onClick={prevVideo}>
        &#10094;
      </button>
      <button className="arrow arrow-right" onClick={nextVideo}>
        &#10095;
      </button>
    </section>
  );
};

export default Hero;