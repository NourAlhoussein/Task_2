import React from "react";
import styles from "./NavigatePagesSection.module.css";
import NavigatePagesComponent from "../NavigatePagesComponent/NavigatePagesComponent";
import pages from "../../Data/PagesData";
function NavigatePagesSection() {
  return (
    <div className={styles.NavigatePagesSection}>
      {pages?.map((page, index) => {
        return <NavigatePagesComponent page={page} key={index} />;
      })}
    </div>
  );
}

export default NavigatePagesSection;
