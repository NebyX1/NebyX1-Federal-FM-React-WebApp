import React from "react";
import InstagramFeed from "../social/InstagramFeed";
import YoutubeFeed from "../social/YoutubeFeed";
import styles from "../../../styles/feeds.module.css"; 

export const Feeds = () => {
  return (
    <div>
      <div className="pt-2 text-white heading-size d-flex flex-column justify-content-center align-items-center">
        <h4 className="headings-font">
          Mirá nuestras últimas entrevistas en vídeo:
        </h4>
      </div>
      <div className={`${styles.container} mb-2 mt-2`}>
        <YoutubeFeed />
      </div>

      <div className="pt-2 text-white heading-size d-flex flex-column justify-content-center align-items-center">
        <h4 className="headings-font">Enterate de las últimas noticias:</h4>
      </div>
      <div className={`${styles.container} mb-2 mt-2`}>
        <InstagramFeed />
      </div>
    </div>
  );
};