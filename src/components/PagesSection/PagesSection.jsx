import React from "react";
import styles from "./PagesSection.module.css";
import PageComponent from "../PageComponent/PageComponent";
function PagesSection({ pages, container }) {
  return (
    <div className={styles.PagesSection}>
      {pages?.map((page, index) => {
        return <PageComponent page={page} key={index} container={container} />;
      })}
    </div>
  );
}

export default PagesSection;
