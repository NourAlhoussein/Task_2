import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../../public/assets/images/logo.png";
import items from "../../Data/NavbarData";
import { logoName } from "../../Data/NavbarData";
function NavBar() {
  const [slideShow, setSlideShow] = useState(false);
  const [activeNav, setActiveNav] = useState(items[0]?.content);
  const [isScroll, setIsScroll] = useState(false);
  const navItemActive = (activeNavbar) => {
    setActiveNav(activeNavbar);
  };
  const openAndCloseSideBAR = () => {
    setSlideShow(!slideShow);
    console.log(slideShow);
  };
  useEffect(() => {
    const scrollDown = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", scrollDown);
  });
  return (
    <div className={`${styles.NavStyle} ${isScroll ? styles.topNavStyle : ""}`}>
      <div className={styles.LogoStyle}>
        <div>
          <img className={styles.LogoPhoto} src={logo} alt="logo" />
        </div>
        <div>{logoName}</div>
      </div>
      <ul className={styles.UlStyleLarg}>
        {items?.map((item, index) => {
          return (
            <li
              className={`${styles.NavItemLarg} && ${
                item.content == activeNav
                  ? styles.backNavActive
                  : styles.backNavDisable
              }`}
              key={index}
              onClick={() => navItemActive(item.content)}
            >
              <a href={item.link}>{item.content}</a>
            </li>
          );
        })}
      </ul>
      <div className={styles.ContactStyle}>Contact</div>
      <button className={styles.BtnNavSmall} onClick={openAndCloseSideBAR}>
        <AiOutlineAlignRight />
      </button>
      <ul className={`${styles.UlStyleSmall} ${slideShow ? styles.show : ""}`}>
        {items?.map((item, index) => {
          return (
            <li className={styles.NavItemSmall} key={index}>
              <a href={item.link}>{item.content}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
