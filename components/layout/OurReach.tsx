"use client";

import { useState } from "react";
import styles from "./OurReach.module.css";

const panIndiaPins = [
  { top: "27%", left: "38%", label: "Rajasthan" },
  { top: "43%", left: "45%", label: "Madhya Pradesh" },
  { top: "46%", left: "28%", label: "Gujarat" },
  { top: "56%", left: "35%", label: "Maharashtra" },
  { top: "50%", left: "57%", label: "Chhattisgarh" },
  { top: "52%", left: "64%", label: "Odisha" },
];

const internationalPins = [
  { top: "42%", left: "60%", label: "Inner Mongolia" },
  { top: "58%", left: "58%", label: "Shanxi" },
  { top: "60%", left: "45%", label: "Shaanxi" },
];

const OurReach = () => {
  const [isInternational, setIsInternational] = useState(false);
  const pins = isInternational ? internationalPins : panIndiaPins;
  const mapImage = isInternational ? "photo/ChinaMap.png" : "photo/IndiaMap.png";

  return (
    <section className={styles.ourReach}>
      <h2>Our Reach</h2>
      <p>
        Our vast global network of ship owners, markets, traders, offices,
        and subsidiaries, as well as ore producers, ships, and markets.
      </p>

      <div className={styles.toggleWrapper}>
        <span className={!isInternational ? styles.activeLabel : ""}>
          Pan India
        </span>
        <button
          className={styles.toggleSwitch}
          onClick={() => setIsInternational((prev) => !prev)}
          aria-label="Toggle reach"
        >
          <span
            className={`${styles.toggleKnob} ${
              isInternational ? styles.knobRight : ""
            }`}
          ></span>
        </button>
        <span className={isInternational ? styles.activeLabel : ""}>
          China
        </span>
      </div>

      <div className={styles.mapWrapper}>
        <img src={mapImage} alt="Reach Map" className={styles.mapImage} />

        {pins.map((pin, index) => (
          <span
            key={index}
            className={styles.pin}
            style={{ top: pin.top, left: pin.left }}
            title={pin.label}
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        ))}
      </div>
    </section>
  );
};

export default OurReach;