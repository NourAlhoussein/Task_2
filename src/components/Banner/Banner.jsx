import React from "react";
import styles from "./Banner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import abstract from "/assets/images/Abstract Design.png"

function GrabSeat({ abstract2, group, group2 }) {
  return (
    <>
      <div className={styles.BannerDiv}>
        <div className={styles.BannerText}>
          Admission is Open, Grab your seat now
        </div>
        <AiOutlineArrowRight className={styles.BannerArrow} />
        <img className={styles.imageOne} src={abstract} alt="" />
        <img className={styles.imageTwo} src={abstract2} alt="" />
        <img className={styles.imageThree} src={group} alt="" />
        <img className={styles.imageFour} src={group2} alt="" />
      </div>
    </>
  );
}
export default GrabSeat;
