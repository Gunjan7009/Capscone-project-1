
import React from "react";
import styles from "./CarouselPage.module.css";
import NewsWidget from "../Components/NewsWidget";
import ProfileWidget from "../Components/ProfileWidget";
import WeatherWidget from "../Components/WeatherWidget";

const CarouselPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profileWidget}>
                <ProfileWidget />
            </div>
            {/* <div className={styles.weatherWidget}>
                <WeatherWidget />
            </div> */}
            <div className={styles.newsWidget}>
                <NewsWidget />
            </div>
        </div>
    );
};

export default CarouselPage;
